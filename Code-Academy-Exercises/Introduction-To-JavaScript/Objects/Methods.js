let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat();
alienShip.takeOff();

// When the data stored on an object is a function it is called a method. A property is what an object has,
// while a method is what an object does. Methods can be included in our object literals by creating the same
// comma-separated key-value pairs. The key serves as the method's name, while the value is an anonymous
// function expression. Object methods are invoked by writing the object's name followed by the dot operator .
// followed by the method name and (). 
