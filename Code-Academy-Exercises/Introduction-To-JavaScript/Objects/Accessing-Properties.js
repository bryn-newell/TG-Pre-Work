let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
console.log(crewCount);
console.log(planetArray);

// An oject's properties can be accessed using dot notation with built in methods such as .length. If we try
// to access a propertity that does not exist on the object, undefined will be returned. 
