function sumFibs(num) {
  let fibNum = [1,1]
  let newNum = fibNum[fibNum.length-2] + fibNum[fibNum.length-1]
  while (newNum <= num){
    fibNum.push(newNum);
    newNum = fibNum[fibNum.length-2] + fibNum[fibNum.length-1]
  }

    //filterto get the odd numbers and reduce to get sum
  return fibNum.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

sumFibs(4);
