function repeatStringNumTimes(str, num) {

  let repeatedStr = ""; 
  while (num > 0) { /* num needs to b +ve */
    repeatedStr += str;
    num--
  }


  return repeatedStr;
}

repeatStringNumTimes("abc", 3);
