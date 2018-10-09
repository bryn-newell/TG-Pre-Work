const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every( word => {return word.length > 5;
	})
 		);

// The MDN is a great resource that contains a complete list of the many built in array methods. Each method
// description contains a brief definition, an example code block with correct syntax, a list of parameters it
// accepts or requires, the return value, an extended description, examples of its use, and other information.
