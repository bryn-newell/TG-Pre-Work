const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Global variables can be accessed anywhere and go to the global namespace when declared. They remain there
// until the program finishes, and too many global variables means this can fill up quickly. Scope pollution
// is when too many global variables exist in the global namespace or when variables are reused across different
// scopes. Scope pollution makes it difficult to keep track of variables and can cause issues and unexpected
// behavior in our code.
