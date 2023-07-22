function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("nyum nyum nyum");
  },
  describe: function() {
    console.log("The name is" + this.name);
  }

};
