function titleCase(str) {

  str = str.toLowerCase().split(" ");
  for (let i=0; i < str.length; i++){
    str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
  }
  return str.join(" ");
}

titleCase("I'm a little tea pot");

/*
1. Change all to lower case
2. Line 5 : let all the splited words 1st letter change to Uppercase
3. Join the words

*/
