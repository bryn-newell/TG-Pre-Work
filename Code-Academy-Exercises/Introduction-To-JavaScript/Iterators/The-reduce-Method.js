const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10 );
console.log(newSum);

// The .reduce() method returns a single value after iterating through elements of an array, which then reduces
// the array. The .reduce() method can also take an optional second parameter to set an initial value
// for accumulator (the first paramter) since the first argument is the callback function. Make sure that this
// second optional parameter is being added to .reduce() and not to the callback function.
