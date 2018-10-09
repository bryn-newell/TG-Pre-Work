let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];

// Objects are mutable and can be updated after they are defined. We can use bracket or dot notation and the
// assigment operator = to add new key-value pairs or change an exisiting property. If the property already
// existed on the object, the assignment will replace the value with the newly assigned value. If there was
// not a property with that name, a new property will be added to the object. Like arrays, an object defined
// with const cannot be reassigned a new object, but it can still be mutated. A property can be deleted
// with the delete operator.
