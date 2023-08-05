function steamrollArray(arr) {
  let ans = [].concat(...arr)
  console.log(ans)
  return ans.some(Array.isArray) ? steamrollArray(ans) : ans;
}

steamrollArray([1, [2], [3, [[4]]]]);
