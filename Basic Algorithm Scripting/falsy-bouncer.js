function bouncer(arr) {
  return arr.filter(object => Boolean(object));
}

bouncer([7, "ate", "", false, 9]);
