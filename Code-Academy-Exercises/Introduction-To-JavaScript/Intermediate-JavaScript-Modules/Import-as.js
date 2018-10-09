import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed,element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// The import named export aliases we defined with the as keyword we use the new names in our import
// statement. We also have the option here to alias an object that was not aliased when exporting inside
// curly braces and using the as keyword. We can also import the entire module as an alias.
