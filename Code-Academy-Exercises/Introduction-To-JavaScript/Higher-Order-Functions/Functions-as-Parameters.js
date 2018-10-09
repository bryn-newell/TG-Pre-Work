const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, value) => {
  let firstTry = func(value);
  let secondTry = func(value);
  if (firstTry === secondTry) {
    return firstTry
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(addTwo,4);

// Functions can also be passed in as parameters to other functions. Callback functions are functions that
// get passed in as parameters and invoked because they are called during the execution of higher-order
// functions. When a function is passed as an argument we don't invoke it, and type the function name
// without parentheses. Invoking the function would evaluate to the return value of that function call.
// Anonymous functions can be arguments as well.
