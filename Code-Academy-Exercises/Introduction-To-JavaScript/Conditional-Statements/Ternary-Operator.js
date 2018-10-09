let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");



// A ternary operator can be used to simplify an else if statement. The condition is provided before the ?
// ternary operator and followed by two expressions separated by a colon : . If the condition is true the first
// expression executes and if it is false the second expression executes.
