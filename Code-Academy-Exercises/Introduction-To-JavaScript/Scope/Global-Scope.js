const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

// Scope is the context in which our variables are declared and in can be thought of in relation to blocks -
// inside or outside of a block. Variables declared outside of a block are in the global scope and are called
// global variables. They can be accessed by any code in the program.
