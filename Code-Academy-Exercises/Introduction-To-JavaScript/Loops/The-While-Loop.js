const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard != 'spade') {
       currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
       }

// A while loop is another kind of loop. The variable is defined outside of the loop, in the global scope.
// The loop is started with the while keyword and followed by the stopping condition or test condition
// in parentheses. It will be evaluated before each round of the loop. While it continues to evaluate to true
// the code block will run, and when it evaluates to false the loop will stop. Then the code block follows
// inside {}. If a condition always evaluates to true it will create an infinite loop, which we do not want.
