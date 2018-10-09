let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj) {
  obj['Fuel Type'] = 'avocado oil'
};

function remotelyDisable(obj){
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

/* Objects are passed by reference. This means when we pass a variable assigned to an object into a
function as an argument, the computer interprets the parameter name as pointing to the space in memory
 holding that object. As a result, functions which change object properties actually mutate the object
 permanently (even when the object is assigned to a const variable). However reassignment of a an object
 would not work the same way.

However, given the example - when an object was passed into a function with the argument obj, obj became a reference
to the memory loaction of the object, but not the the object's variable. This is because the obj paramter
of the function is a variable in its own right. So the body of the function has no knowledge of the object's
variable at all. */
