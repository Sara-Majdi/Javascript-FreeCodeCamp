function convertToRoman(num) {
  let ans = ""
  let romanNums = {
    M:	1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1
  }

  //access romanNums properties
  for(let prop in romanNums){
    while (num >= romanNums[prop]){
      ans += prop;
      num -= romanNums[prop];
    }
  }

 return ans;
}

convertToRoman(36);
