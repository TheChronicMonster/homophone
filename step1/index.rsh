'reach 0.1'

// last step
const [isWord, HI, YOU, WRITE, WRACK, WAIT] = makeEnum(5);
const [isWord2, HIGH, EWE, RITE, RACK, WEIGHT] = makeEnum(5);
const [isOutcome, ALEESE_WINS, ALICE_WINS] = makeEnum(2);

// last step (start toward bottom and get error)
const winner = (wordAlice, wordAleese) => { 
    if (wordAlice > wordAleese) { 
        return wordAlice - wordAleese; 
    } else { 
        return wordAleese - wordAlice; 
    } 
}; 

// step 1
const Player = {
    pickWord1: Fun([], UInt),
    guessWord2: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

// step 1
export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
    });
    const Aleese = Participant('Aleese', {
        ...Player,
    });
    init();

    Alice.only(() => {
        const wordAlice = declassify(interact.pickWord1());
    });
    Alice.publish(wordAlice);
    commit();

    Aleese.only(() => {
        const wordAleese = declassify(interact.guessWord2());
    });
    Aleese.publish(wordAleese);

    // second to last step
    const outcome = winner(wordAlice, wordAleese);
    const                      [forAlice, forAleese] =
      outcome == ALICE_WINS ?  [        1,        0] :
      outcome == ALEESE_WINS ? [        0,        1] :
                               [        1,        1];
    commit();

    // observe error from initial naive approach
    each([Alice, Aleese], () => {
        interact.seeOutcome(outcome);
    });
});