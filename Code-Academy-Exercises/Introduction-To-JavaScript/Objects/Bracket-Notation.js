let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];
console.log(spaceship[propName])

// A key's value of an object can also be accessed using brackets, similarly to when indexing an array. The
// property name or the key is passed into the brackets. Bracket notation must be used when accessing keys
// that have numbers, spaces, or special characters in them, otherwise an error would occur. With bracket
// notation you can also use a variable inside the brackets to select the keys of an object. This can be
// especially helpful when working with functions.
