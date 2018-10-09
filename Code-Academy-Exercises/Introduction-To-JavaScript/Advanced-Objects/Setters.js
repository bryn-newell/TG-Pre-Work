const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else { console.log('Pass in a number that is greater than or equal to 0')}
  },
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors)


// Setter methods reassign values of existing properties within an object. We can use a check, similarly to the
// syntax for getters to find out the value type being assigned. Then using a setter method only the correct
// type of value will reassign the value. There are many benefits to setter methods, however it is still
// possible to directly reassign properties.
