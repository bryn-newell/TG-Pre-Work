function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns) {
  return monitorCount(rows,columns) * 200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);

// The return value of a function can also be used inside another function which are called helper functions.
// Each function holding a specific task makes our code easier to read and debug. Using multiple functions
// can help us to section off coding into smaller, logical and more manageable tasks. 
