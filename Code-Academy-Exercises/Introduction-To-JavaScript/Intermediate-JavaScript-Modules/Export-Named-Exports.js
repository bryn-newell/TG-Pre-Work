export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300,
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200,
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements( maxSpeed, minSpeed, requiredSpeedRange ){
  let range = maxSpeed-minSpeed;
  if (range > requiredSpeedRange){
    return true
  } else { return false }
};

// Named exports can also be exported as soon as they are declared by placing export in front of the variable
// declaration. Which means we don't need to include and export statement at the bottom of the file.
