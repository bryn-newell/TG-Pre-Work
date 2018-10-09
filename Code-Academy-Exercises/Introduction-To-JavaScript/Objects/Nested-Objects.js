let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

const capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [
  {name: 'Susan',
  hometown: 'San Diego'},
  {name: 'Brian',
  hometown: 'Buffalo'}
]

const firstPassenger = spaceship.passengers[0];
console.log(firstPassenger.name);

// Objects can often have a property of another obeject, and so on, which are called nested objects. Operators
// can be chained to access nested properties. You must pay attention to which operator makes sense to use in
// each layer.
