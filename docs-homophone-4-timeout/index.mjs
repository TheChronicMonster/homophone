import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accAleese = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeAleese = await getBalance(accAleese);

const ctcAlice = accAlice.contract(backend);
const ctcAleese = accAleese.contract(backend, ctcAlice.getInfo());

const WORD1 = ['hi', 'you', 'write', 'wrack', 'wait'];
const WORD2 = ['high', 'ewe', 'rite', 'rack', 'weight'];
const OUTCOME = ['Aleese wins', 'Alice wins', 'Alice wins', 'Alice wins', 'Alice wins'];
const Player = (Who) => ({
    ...stdlib.hasRandom,
    pickWord: async () => { // async now
        const word1 = Math.floor(Math.random() * 5);
        console.log(`${Who} chooses "${WORD1[word1]}"`);
        if ( Math.random() <= 0.5 ) {
            for ( let i=0; i < 10; i++ ) {
                console.log(`${Who} forgets to participate...`);
                await stdlib.wait(1);
            }
        }
        return word1;
    },
    guessWord: async () => { // async now
        const word2 = Math.floor(Math.random() * 5);
        console.log(`${Who} replies with "${WORD2[word2]}"`);
        if ( Math.random() <= 0.5 ) {
            for ( let i=0; i < 10; i++ ) {
                console.log(`${Who} forgets to participate...`);
                await stdlib.wait(1);
            }
        }
        return word2;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
        console.log(`${Who} observes that a timeout has occurred.`);
    },
});

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
        deadline: 10,
    }),
    ctcAleese.p.Aleese({
        ...Player('Aleese'),
        // add random timeout and for loop
        acceptWager: async (amt) => { // async is new
            if ( Math.random() <= 0.5 ) {
                for ( let i = 0; i < 10; i++ ) {
                    console.log(`Aleese forgets to participate...`);
                    await stdlib.wait(1);
                }
            } else {
                console.log(`Aleese accepts the wager of ${fmt(amt)}.`);
            }
        },
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterAleese = await getBalance(accAleese);

console.log(`Alice had ${beforeAlice}, and now has ${afterAlice}.`);
console.log(`Aleese had ${beforeAleese}, and now has ${afterAleese}.`);