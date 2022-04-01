# Homophone: The Game of Similar Words

Critics say that Reach makes blockchain too simple; that a technology cannot possibly be so simple to use. 
This tutorial is our humble response to such critics. 

Everyone who's studied cryptography for more than a few hours has heard of the infamous Alice and Bob. 
We know them, we love them. 
Alice and Bob have done it all. 
They are the eternal participants of all cryptographic stories. 

To satisfy our critics, we have retired Bob and introduce you to Alice's twin sister, Aleese. 
Critics rejoice, after solving issues of security, interoperability, and ability to learn a web3 programming language, 
Reach has leveled the playing field by making blockchain difficult, once again.

Pay close attention while working through this tutorial. 
Alice and Aleese can be difficult to distinguish from one another. 
Enjoy building this fully working DApp (really, it honestly works), 
and most of all, Happy April Fools' Day, 
from all of us at Reach, to all of you.

>>> Chances are, you're working on this tutorial on a day that is not April Fool's Day. 
This tutorial builds a working game from backend and test suite all the way to the creation of an interactive GUI with `./reach react`. 
Fair warning, this tutorial does possess an added wrinkle of complexity, 
in that the Participants have been unconventionally named "Alice" and "Aleese." 
This may be a feature or a bug. 
We'll let you decide. 
While the original concept of this tutorial is founded in a light-hearted April Fool's Day joke, 
we've found that the similarities in the names forces a heightened level of focus. 
If you have questions we're here for you in our [Discord's](https://discord.gg/q9Uxtxqu) [#help channel](https://discord.com/channels/628402598663290882/749639931399241792).

## Assumptions

This tutorial assumes that you, 
the reader, 
has completed at least one other Reach [tutorial](https://docs.reach.sh/tut/rps/#tut), 
that you have [installed `reach`](https://docs.reach.sh/quickstart/) 
and that you are able to create a directory and files for this project. 

We recommend `cd`ing into the parent directory where `reach` is installed, 
and creating a subdirectory named, `homophone`. 
Within the subdirectory, `homophone`, touch two files: `index.rsh` and `index.mjs`.

## Getting Started

Our goal is to create a game that allows two participants, 
Alice and Aleese, 
to challenge one another in a game of selecting homophones, 
words that sound alike. 

Alice will select a word, 
then Aleese will guess the word that is a homophone to Alice's choice. 
The DApp will then share the outcome of the game with both, Alice and Aleese.

Start by documenting the version of Reach.

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 1
```

Next, skip a few lines for the time being and define the `Player` constant.

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 3-7
```

Line 3: Defines the constant variable, `Player`.
Line 4: Defines the method, `pickWord`, which takes no parameters as input and outputs an unsigned integer.
Line 5: Defines `guessWord`, a method that has no inputs and outputs an unsigned integer.
Line 6: Defines the `seeOutcome` method, which takes an unsigned integer as an input and has no outputs. 

Next, create the participant interact interface. 
This interface defines the participants and outlines how participants may interact 
with one another and the contract.

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 9-16
```

Line 9: Begins the participant interact interface.
Line 10: Creates the participant, Alice, and stores the data in a constant, `Alice`.
Line 11: Alice inherits the functionality found in the `Player` object.
Line 13: Creates the participant, Aleese, and stores her data in the constant, `Aleese`.
Line 14: Aleese also inherits the methods within the `Player` object.
Line 16: `init()` initializes the Reach Application.

The DApp is now initialized. 
Alice is ready to make her first move. 
However, before moving further in the backend, 
open `index.mjs` and write the first 10 lines, 
which load dependencies required of Reach, 
provide participants with a balance, 
and deploy and attach the contract.

```
load: /examples/docs-homophone-1-setup/index.mjs
range: 1-10
```

Lines 1-3: Import Reach's standard library for JavaScript frontends, the backend, 
and create a constant to house the standard library call function.
Lines 5-7: Provide Alice and Aleese with a starting balance of 100 atomic units of a cryptocurrency. (Only works for testing purposes).
Line 9: Alice deploys the contract.
Line 10: Aleese attaches to the contract.

Next, create arrays to store the homophones and an array for the possible outcomes.

```
load: /examples/docs-homophone-1-setup/index.mjs
range: 12-14
```

Lines 12-13: Each array stores half of the homophone pairings. 
Lines 14: Creates the outcome array.

Now the `Player` methods' functionality can be defined. 

```
load: /examples/docs-homophone-1-setup/index.mjs
range: 15-29
```

Line 15: Creates the `Player` constant in the frontend. 
`Who` will reference the participant calling the functions within the object. 
Lines 16-20: Defines the logic of `pickWord()`. 
The computer will randomly choose one of the five indexes in the array, `WORD1` and print the word choice.
Lines 21-25: Similar to the functionality for `pickWord()`, but helps `guessWord()` choose an array index from the choices available in `WORD2`.
Lines 26-28: `seeOutcome` accepts an unsigned integer and then prints the outcome of the game. 

Finally, the interact object is ready to be populated. 
The interact object controls which functions are available to each participant. 

```
load: /examples/docs-homophone-1-setup/index.mjs
range: 31-38
```

Line 31: Creates a Promise.
Lines 32-34: Populates Alice's interact object with the methods defined in `Player`.
Lines 35-37: Creates the interact object for Aleese and populates her object with the `Player` methodologies.
Line 38: Closes the Promise.

Return to `index.rsh` in the backend. 
Alice and Aleese are now ready to define their opening turns. 

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 18-22
```

Line 18: Alice begins a local step, which is a step that Alice makes on her local device.
Line 19: Alice interacts with the `pickWord()` function, 
declassifies the result and stores the information in the `wordAlice` constant. 
`wordAlice` is now ready to be shared with the consensus network. 
Line 21: Publishes the data contained in `wordAlice` to the consensus network, rendering that data immutable. 
Line 22: Alice commits her publication, exiting the consensus step and returning to an intermediary step.

>>> # Immutable
>>> Immutable refers to the unchanging nature of an element. In this case, once `wordAlice` is published in the blockchain, the value cannot be changed.

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 24-27
```

Line 24: Now it is Aleese's turn to enter her local step.
Line 25: Aleese interacts with the `guessWord` method and declassifies and stores the result in `wordAleese`.
Line 27: Aleese publishes `wordAleese` to the blockchain.

Before Aleese commits the information, she will calculate the winner. 

``` rsh
load: /examples/docs-homophone-1-setup/index.rsh
range: 29-35
```

Here, we've setup an if-else statement to determine the absolute difference between `wordAlice` and `wordAleese`. 
There's nothing special or specific to Reach here. 
The if-else statement is necessary so Reach avoids a `bigNumberify` error due to a difference resulting in a negative number. 

Next, the outcome will be determined by the value stored in `winner`. Then, a matrix will be created to inform `outcome` of the results.

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 37-38
```

Line 37: Stores the result of `winner`'s if-else statement in the constant `outcome`.
Line 38: Commits the data written in the consensus step.

>>> # !Error Alert!
>>> If you're using the VSCode IDE with Reach's [extension](/examples/docs-homophone-1-setup/) then you may notice an error message. 
We're approaching "a teachable moment" and will resolve this error after observing the compiler's message. 

```
load: /examples/docs-homophone-1-setup/index.rsh
range: 40-43
```

Lines 40-42: The `each` method allows participants to move from consensus step to their local step to execute commands within the arrow function. 
Alice and Aleese each take turns observing the outcome of the game.
Line: 43: Closes the program.

Let's observe the results of executing `./reach compile`. 

```
load: /examples/docs-homophone-1-setup/shadowing-error.txt
```

Rather than running as we'd hope, the compiler throws an error "Identifier 'wordAleese' is already bound...It cannot be bound again. 
The compiler also shares the location of the original binding as well as the location of the second binding attempt. 
When experiencing compiler errors, it's important to take time to read for comprehension. 
Reach attempts to help developers by printing the errors' location and offers an external reference to learn more. 

>>> If you find a compiler error that doesn't make sense after performing the customary research of reviewing documentation and searching for clarification in Discord and online, then share your errors in Reach's discord in the #help channel. 

>>>The best way to share information in Discord is to copy and paste the text. 
For code samples, use three tick marks "```" to create a code block. 
This helps our engineers diagnose the issue with higher speed. 

This error states that `wordAleese` can only be bound to a constant one time inside the Reach Application. 
The solution to this error is to move `winner`'s if-else code block out of the `Reach.App` block and into the data definition section.

Move the if-else code block above `const Player`.

```
load: /examples/docs-homophone-1b-setup/index.rsh
range: 1-15
```

Save the file and execute `./reach compile` a second time. 

Reach should now compile correctly. 
If there are any errors, review the instructions and code snippets above, 
check for small mistakes and fix them until the program compiles successfully.

Once the program compiles successfully, 
it is ready to run. Execute `./reach run`. 

When `./reach run` is called, 
Reach will compile the program, 
Docker will build the backend, 
and then the program will execute. 

This is an example output of three executions: 

```
load: /examples/docs-homophone-1b-setup/output.txt
```

In the first example, Alice wins because Aleese doesn't pick the correct homophone.

In the second example, Aleese chooses the correct homophone and wins the round.

In the third round, Aleese doesn't choose the correct homophone, 
but the outcome is `undefined`. 
This is due to the way outcome is calculated in `winner`'s if-else statement. 
The `Undefined` output can be rectified by adding three additional `'Alice wins'` indexes to the `OUTCOME` array in `index.mjs`. 
However, there is another way to resolve this issue, 
which will be explored further into the tutorial. 

>>> # What if
>>> What if the `winner` expression is simplified to `const winner = (wordAleese, wordAlice) => { return wordAlice - wordAleese; };`? 
Will Reach compile successfully?

The answer is yes, `./reach compile` will compile successfully. 

Will Reach run successfully?

While, `./reach run` has a chance of running successfully, 
if `wordAlice` is a smaller integer than `wordAleese`, then `winner` will result in a negative integer, 
and Reach will throw a `bigNumberify` Error because the negative number is outside the lower bounds of '0'. 
Inconsistent behavior between a successful `compile` and a failed `run` indicates the need for a condition (such as the one found in our solution), 
or an assertion to verify the truthfulness of the program.(Something we'll discuss in greater detail in future sections).

### Review

In this section, 
The basics of the homophone game were established in the backend and frontend. 


Lines 43-46: Creates an array `[forAlice, forAleese]` as a constant that is assigned a value based on the value stored in `outcome`.