import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availabeAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequriements['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// We can import the collection of objects and functions with the same data and the import keyword can be
// used the same way to import both types of variables.
