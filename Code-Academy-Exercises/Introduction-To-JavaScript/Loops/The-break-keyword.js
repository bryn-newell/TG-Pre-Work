const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i<rapperArray.length; i++){
     if (rapperArray[i] === 'Notorious B.I.G.') { break; }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");


// To stop a loop from continuing to execute even if the original stopping condition hasn't been met, the
// break keyword can be used. Break alows us to break out of the loop from within the code block.
