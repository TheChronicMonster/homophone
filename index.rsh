'reach 0.1'

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

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
    });
    const Aleese = Participant('Aleese', {
        ...Player,
    });
    init();

    Alice.only(() => {
        const wordAlice = declassify(interact.pickWord());
    });
    Alice.publish(wordAlice);
    commit();

    Aleese.only(() => {
        const wordAleese = declassify(interact.guessWord());
    });
    Aleese.publish(wordAleese);

    const outcome = winner(wordAlice, wordAleese);
    commit();

    each([Alice, Aleese], () => {
        interact.seeOutcome(outcome);
    });
});