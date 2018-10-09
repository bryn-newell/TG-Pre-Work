// Write your code below
let bobsFollowers = ['Susie', 'Brian', 'Evelyn', 'Kate'];

let tinasFollowers = ['Hannah', 'Kate', 'Brian'];

let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j=0; j< tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]){ mutualFollowers.push(tinasFollowers[j])
    }
  }
};
console.log(mutualFollowers);

// Loops can also be nested inside other loops. They can often be used to compare elements within two
// arrays.
