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

const Player = {
    pickWord: Fun([], UInt),
    guessWord: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

// add wager methods
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

    // update local steps with wagers
    Alice.only(() => {
        const wager = declassify(interact.wager);
        const wordAlice = declassify(interact.pickWord1());
    });
    Alice.publish(wager, wordAlice)
      .pay(wager);
    commit();

    Aleese.only(() => {
        interact.acceptWager(wager);
        const wordAleese = declassify(interact.guessWord2());
    });
    Aleese.publish(wordAleese)
      .pay(wager);

    // changed the const outcome
    const outcome = winner(wordAlice, wordAleese);
    const                      [forAlice, forAleese] =
      outcome == ALEESE_WINS ?  [        0,        2] :
                                [        2,        0];
        
    transfer(forAlice * wager).to(Alice);
    transfer(forAleese * wager).to(Aleese);
    commit();

    each([Alice, Aleese], () => {
        interact.seeOutcome(outcome);
    });
});