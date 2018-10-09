const robot = {
  energyLevel: 100,
  checkEnergy () {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// The calling object is the object the method belongs to. If we use the this keyword in a method the value of
// this is the calling object, but it becomes more complicated when using arrow functions. Arrow functions
// inherently bind an already defined this value to the function itself that is not the calling object. It often
// holds the value of the global object, or one that exists int he global scope, which probably doesn't have
// the property and therefore returns undefined. Basically - avoid using this with an arrow function.
