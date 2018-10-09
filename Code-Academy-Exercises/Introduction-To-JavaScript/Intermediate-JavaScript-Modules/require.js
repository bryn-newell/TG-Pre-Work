const Airplane = require('./1-airplane.js');
function displayAirplane() {
  console.log(Airplane.myAirplane);
}
displayAirplane();

// A common way to import and make use of the module is by using the require() keyword. First we create a
// variable with const = require(). Inside the () of the require function the module's filepath should be
// passed in as the parameter. Then we can use the module and access its properties from this variable.
