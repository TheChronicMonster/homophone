'reach 0.1'

const [isWord, HI, YOU, WRITE, WRACK, WAIT] = makeEnum(5);
const [isWord2, HIGH, EYE, RITE, RACK, WEIGHT] = makeEnum(5);
const [isOutcome, ALEESE_WINS, ALICE_WINS] = makeEnum(2);

const winner = (wordAlice, wordAleese) => { 
    if (wordAlice > wordAleese) { 
        return wordAlice - wordAleese; 
    } else { 
        return wordAleese - wordAlice; 
    } 
};

assert(winner(HI, EYE) == ALICE_WINS);
assert(winner(HI, HIGH) == ALEESE_WINS);

const Player = {
    ...hasRandom,
    pickWord: Fun([], UInt),
    guessWord: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });
    const Aleese = Participant('Aleese', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Aleese], () => {
            interact.informTimeout();
        });
    };

    // new order of operations
    Alice.only(() => {
        const wager = declassify(interact.wager);
        assume(wager > 0);
        const deadline = declassify(interact.deadline);
        const _wordAlice = interact.pickWord();
        assume(_wordAlice != null);
        const [_commitAlice, _saltAlice] = makeCommitment(interact, _wordAlice);
        const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(wager, deadline, commitAlice)
      .pay(wager);
    commit();

    Aleese.only(() => {
        interact.acceptWager(wager);
    });
    Aleese.pay(wager)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    var tries = 0;
    invariant( tries >= 0 );
    while (tries < 3) {
        commit();
        
        unknowable(Aleese, Alice(_wordAlice, _saltAlice));
        Aleese.only(() => {
            const wordAleese = declassify(interact.guessWord());
           // assume(wordAleese != null);
        });
        Aleese.publish(wordAleese)
          .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const saltAlice = declassify(_saltAlice);
            const wordAlice = declassify(_wordAlice);
        });
        Alice.publish(saltAlice, wordAlice)
          .timeout(relativeTime(deadline), () => closeTo(Aleese, informTimeout));
        checkCommitment(commitAlice, saltAlice, wordAlice);

        if (wordAlice == wordAleese) {
            const outcome = ALEESE_WINS;
            transfer(2 * wager).to(Aleese);
            continue;
        }
        
        tries = tries + 1;
        continue;
    }

    const outcome = ALICE_WINS;
    transfer(2 * wager).to(Alice);
    commit();

    each([Alice, Aleese], () => {
        interact.seeOutcome(outcome);
    });
});