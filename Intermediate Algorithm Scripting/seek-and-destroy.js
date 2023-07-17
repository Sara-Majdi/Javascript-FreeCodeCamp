function destroyer(arr, ...destroy) {


  return arr.filter(element => !destroy.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
