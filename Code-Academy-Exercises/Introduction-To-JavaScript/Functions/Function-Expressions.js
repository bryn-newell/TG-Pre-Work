const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  }
  else {
    return false;
  }
};
console.log(plantNeedsWater('Tuesday'));


// A function can also be defined in an expression using the function keyword. In a function expression the
// function name is usually omitted and instead known as an anonymous function and is usually stored in a
// variable to refer to it. Function expressions are called the same way, but cannot be hoisted (called before
// they are defined).
