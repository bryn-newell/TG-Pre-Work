const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
};
console.log(robot.provideInfo())

// When a function is defined as data inside an object, it does not automatically have access to other
// properties in the object. The this keyword allows a function to have access to other properties in the object.
// It references the calling object which provide's access to the calling object's properties. 
