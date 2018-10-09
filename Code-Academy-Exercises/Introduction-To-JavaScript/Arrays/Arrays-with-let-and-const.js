let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);
utensils = ['Spoon']

// Elements in an array declared with const remain mutable. The contents of a const array can be changed,
// but it cannot be reassigned a new array or a different value.
