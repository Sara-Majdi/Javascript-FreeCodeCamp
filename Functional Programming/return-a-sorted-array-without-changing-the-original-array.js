const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const localArray = arr.slice();
  return localArray.sort((a,b) => a-b)

  // Only change code above this line
}

nonMutatingSort(globalArray);
