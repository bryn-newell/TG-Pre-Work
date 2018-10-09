let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log( 'It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

// More conditions can be added with else if statements for more than two possible outcomes. It always
// comes after the if statement and before the else statement. The syntax is the same as if statments and
// multiple else if statements are read from top to bottom, checking the condition of the first statement
// before moving on to the next.
