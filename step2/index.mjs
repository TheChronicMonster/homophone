import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accAleese = await stdlib.newTestAccount(startingBalance);

// part 2: add balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeAleese = await getBalance(accAleese);

const ctcAlice = accAlice.contract(backend);
const ctcAleese = accAleese.contract(backend, ctcAlice.getInfo());

const WORD1 = ['hi', 'you', 'write', 'wrack', 'wait'];
const WORD2 = ['high', 'ewe', 'rite', 'rack', 'weight'];
// edit outcome possibilities - there's got to be a better way
const OUTCOME = ['Aleese wins', 'Alice wins', 'Alice wins', 'Alice wins', 'Alice wins'];
const Player = (Who) => ({
    pickWord1: () => {
        const word1 = Math.floor(Math.random() * 5);
        console.log(`${Who} chooses "${WORD1[word1]}"`);
        return word1;
    },
    guessWord2: () => {
        const word2 = Math.floor(Math.random() * 5);
        console.log(`${Who} replies with "${WORD2[word2]}"`);
        return word2;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
});

// add wager and acceptwager
await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
    }),
    ctcAleese.p.Aleese({
        ...Player('Aleese'),
        acceptWager: (amt) => {
            console.log(`Aleese accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

// add these messages
const afterAlice = await getBalance(accAlice);
const afterAleese = await getBalance(accAleese);

console.log(`Alice had ${beforeAlice}, and now has ${afterAlice}.`);
console.log(`Aleese had ${beforeAleese}, and now has ${afterAleese}.`);