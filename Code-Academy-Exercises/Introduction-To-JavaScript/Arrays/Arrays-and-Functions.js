const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);

// When an array is passed into a function, if it is mutated inside the function, the change will stay outside
// the function as well. This can also be explained as pass-by-reference since we're passing a reference
// to where the variable memory is stored, and then changing the memory. 
