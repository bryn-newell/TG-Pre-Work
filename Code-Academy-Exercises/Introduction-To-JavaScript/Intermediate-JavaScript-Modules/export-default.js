const Airplane = {};
Airplane.availableAirplanes = [
  {name: 'AeroJet',
  fuelCapacity: 800},
  { name:'SkyJet',
   fuelCapacity: 500} ];
export default Airplane;

// ES6 has a new more readable and flexible syntax for exporting modules. These two techniques are default
// exports and named exports. Default works similarly to module.exports allowing us to export one module
// per file. The syntax we use is export default ObjectName. 
