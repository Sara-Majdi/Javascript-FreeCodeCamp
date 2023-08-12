function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let ans = ""

  for (let i = 0; i < str.length; i++){
    // for N - Z
    if (letters.indexOf(str[i]) >= 13){
      ans += letters[letters.indexOf(str[i]) - 13]
    }
    // for A - M
    else if (letters.indexOf(str[i]) < 13 && letters.indexOf(str[i]) > -1){
      ans += letters[letters.indexOf(str[i]) + 13]
    }
    //add space
    else {
      ans += str[i]
    }
  }

  return ans;
}

rot13("SERR PBQR PNZC");
