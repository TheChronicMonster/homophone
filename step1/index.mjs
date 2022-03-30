import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accAleese = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcAleese = accAleese.contract(backend, ctcAlice.getInfo());

const WORD1 = ['hi', 'you', 'write', 'wrack', 'wait'];
const WORD2 = ['high', 'ewe', 'rite', 'rack', 'weight'];
const OUTCOME = ['Aleese wins', 'Alice wins'];
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

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
    }),
    ctcAleese.p.Aleese({
        ...Player('Aleese'),
    }),
]);