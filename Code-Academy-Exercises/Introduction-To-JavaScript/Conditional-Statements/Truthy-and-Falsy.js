let wordCount = 10;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// A truthy value will not exactly equal true but can be used to check if the value of a variable exists.
// If the value of a variable does not exist it will be falsy or evaulate to false when checked as a condition.
// Falsy values include 0, an empty string, null, undefined, and NaN (not a number).
