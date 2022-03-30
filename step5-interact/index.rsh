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
        seeWord: Fun([UInt],Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Aleese], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        assume(wager > 0);
        const wordAlice = declassify(interact.pickWord());
        assume(wordAlice != null);
        const deadline = declassify(interact.deadline);
    });
    Alice.publish(wager, wordAlice, deadline)
      .pay(wager);
    commit();

    Aleese.only(() => {
        interact.acceptWager(wager);
        interact.seeWord(wordAlice);
        const wordAleese = declassify(interact.guessWord());
        assume(wordAleese != null);
    });
    Aleese.publish(wordAleese)
      .pay(wager)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
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