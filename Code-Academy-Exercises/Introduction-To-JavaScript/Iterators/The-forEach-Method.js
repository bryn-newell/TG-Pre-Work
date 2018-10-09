const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// or

fruits.forEach(function(fruit){console.log(`I want to eat a ${fruit}.`)
                              });

// The .forEach() method will execute the same code for each element of an array. The array is named before
// the dot operator then it takes an argument of a callback function. forEach then loops through the array
// and each element is passed as an argument to the callback funtion. The return value for forEach will always
// be undefined. There are multiple different stylistic ways to write the syntax of passing in a callback
// function to an iterators.
