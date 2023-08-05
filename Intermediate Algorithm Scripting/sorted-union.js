function uniteUnique(...arr) {
  let ans = [];
  for (let arrays of arr){
    for (let element of arrays){
      if(!ans.includes(element)){
        ans.push(element);
      }
    }
  }
  return ans;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
