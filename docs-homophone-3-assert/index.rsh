'reach 0.1'

const [isWord, HI, YOU, WRITE, WRACK, WAIT] = makeEnum(5);
const [isWord2, HIGH, EWE, RITE, RACK, WEIGHT] = makeEnum(5);
const [isOutcome, ALEESE_WINS, ALICE_WINS] = makeEnum(2);

const winner = (wordAlice, wordAleese) => { 
    if (wordAlice > wordAleese) { 
        return wordAlice - wordAleese; 
    } else { 
        return wordAleese - wordAlice; 
    } 
};

assert(winner(HI, EWE) == ALICE_WINS);
assert(winner(HI, HIGH) == ALEESE_WINS);

const Player = {
    ...hasRandom,
    pickWord: Fun([], UInt),
    guessWord: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
    });
    const Aleese = Participant('Aleese', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    Alice.only(() => {
        const wager = declassify(interact.wager);
        assume(wager > 0);
        const _wordAlice = interact.pickWord();
        assume(_wordAlice != null);
        const [_commitAlice, _saltAlice] = makeCommitment(interact, _wordAlice);
        const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(wager, commitAlice)
      .pay(wager);
    commit();

    unknowable(Aleese, Alice(_wordAlice, _saltAlice));
    Aleese.only(() => {
        interact.acceptWager(wager);
        const wordAleese = declassify(interact.guessWord());
        assume(wordAleese != null);
    });
    Aleese.publish(wordAleese)
      .pay(wager);
    commit()
    
    Alice.only(() => {
        const saltAlice = declassify(_saltAlice);
        const wordAlice = declassify(_wordAlice);
    });
    Alice.publish(saltAlice, wordAlice);
    checkCommitment(commitAlice, saltAlice, wordAlice);

    const outcome = winner(wordAlice, wordAleese);
    const                      [forAlice, forAleese] =
      outcome == ALEESE_WINS ? [        0,        2] :
                               [        2,        0];
    transfer(forAlice * wager).to(Alice);
    transfer(forAleese * wager).to(Aleese);
    commit();

    each([Alice, Aleese], () => {
        interact.seeOutcome(outcome);
    });
});