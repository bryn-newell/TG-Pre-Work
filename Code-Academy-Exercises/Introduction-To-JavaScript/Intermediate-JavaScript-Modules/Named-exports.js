let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'] },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'] }
];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length >= requiredStaff){
      return true
      } else {return false}
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

// Named exports allow us to export data through the use of variables. When using named exports we do not
// set the properties of an object, each export is stored in its own variable. The export keyword is followed
// by {}; Inside the curly braces are the variable names separated by , .
