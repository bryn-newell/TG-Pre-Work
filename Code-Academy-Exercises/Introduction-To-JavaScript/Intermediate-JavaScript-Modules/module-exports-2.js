//2-airplane.js
let Airplane = {};
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};

//2-missionControl.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// Any collection of data and functions can also be wrapped in an object and exported as a module.
