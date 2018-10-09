let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// In a boolean condition JS will assign the truthy value to a vriable when a || operator is used
// in the assignment. || conditions check the left hand condition first, and if the left hand is falsy it will
// check the right hand. The concept is called short-circuit evaluation. 
