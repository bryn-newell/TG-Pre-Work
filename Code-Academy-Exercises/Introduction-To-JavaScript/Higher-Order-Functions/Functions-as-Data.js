const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();
console.log(is2p2.name);

// Functions behave like any other data type in JavaScript. They can be assigned to variables and reassigned
// to new variables. When we want to assign the value of a function itself, and not the value it returns,
// we do not used () after the name. Functions are first class objects, which means they can have properties
// and methods, such as .length or .toString(). 
