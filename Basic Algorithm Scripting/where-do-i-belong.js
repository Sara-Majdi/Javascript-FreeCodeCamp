function getIndexToIns(arr, num) {
  arr = arr.sort(function(x,y){
    return x - y;
  })
  for (let object of arr){
    if (object >= num) return arr.indexOf(object)
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
