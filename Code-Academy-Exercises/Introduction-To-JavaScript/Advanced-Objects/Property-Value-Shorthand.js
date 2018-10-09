function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring. Property
// value shorthand is a destrcuturing technique that can be used to refactor our factory functions. Since
// the key is the same as the function parameter it does not have to be repeated for property assignments. 
