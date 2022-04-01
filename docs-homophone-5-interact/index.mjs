import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
    `Are you Alice?`,
    ask.yesno
);
const who = isAlice ? 'Alice' : 'Aleese';

console.log(`Beginning 'Homophone: the Game of Similar Words!' as ${who}`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create a devnet account?`,
    ask.yesno
);
if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });
} else {
    const info = await ask.ask(
        `Please paste the contract information: `,
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}.`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
    console.log(`There was a timeout`);
    process.exit(1);
};

if (isAlice) {
    const amt = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
    );
    interact.wager = amt;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
    interact.acceptWager = async (amt) => {
        const accepted = await ask.ask(
            `Do you accept the wager of ${fmt(amt)}?`,
            ask.yesno
        );
        if (!accepted) {
            process.exit(0);
        }
    };
}

const WORD1 = ['hi', 'you', 'write', 'wrack', 'wait'];
const WORDS1 = {
    'hi': 0,
    'you': 1,
    'write': 2,
    'wrack': 3,
    'wait': 4,
};
const WORD2 = ['high', 'ewe', 'rite', 'rack', 'weight'];
const WORDS2 = {
    'high': 0,
    'ewe': 1,
    'rite': 2,
    'rack': 3,
    'weight': 4,
};

if (isAlice) {
    interact.pickWord = async () => {
        const word1 = await ask.ask(`Choose a word from the following list: ${WORD1}`, (x) => {
            const word1 = WORDS1[x];
            if ( word1 === undefined ) {
                throw Error(`Not a valid ${word1}`);
            }
            return word1;
        });
        console.log(`You played ${WORD1[word1]}`);
        return word1;
    };
} else {
    interact.seeWord = async (word1) => {
        console.log(`Your opponent played ${WORD1[word1]}`);
    }
    interact.guessWord = async () => {
        const word2 = await ask.ask(`Which word do you choose`, (x) => {
            const word2 = WORDS2[x];
            if ( word2 === undefined ) {
                throw Error(`Not a valid ${word2}`);
            }
            return word2;
        });
        console.log(`You played ${WORD2[word2]}`);
        return word2;
    };
};

const OUTCOME = ['Aleese wins', 'Alice wins', 'Alice wins', 'Alice wins', 'Alice wins'];
interact.seeOutcome = async (outcome) => {
    console.log(`The outcome is: ${OUTCOME[outcome]}`);
};


const part = isAlice ? ctc.p.Alice : ctc.p.Aleese;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();