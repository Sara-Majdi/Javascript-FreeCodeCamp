function palindrome(str) {
  //remove the punctuations
  str = str.replace(/\W|_/g, "").toLowerCase()

  //split each char, reverse it, join the words
  let reverse = str.split("").reverse().join("")
  
  if (str === reverse) return true
  return false

}

palindrome("2A3*3a2");
