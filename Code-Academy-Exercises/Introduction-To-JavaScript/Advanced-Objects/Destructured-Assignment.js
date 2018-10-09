const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robot;
functionality.beep();

/* Often we want to extract key-value pairs and save them as properties. Destructured assignment can be used
to do this, but in a shortened way. We create a variable with the name of an object's key wrapped in {} and
assign it to the object. Such as const { key } = object. It can also be used to acess nested elements.
