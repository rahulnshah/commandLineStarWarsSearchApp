// Here we are overriding module.exports to point to a function instead of an object, so when we require this module, it gets imported as a function!
module.exports = function() {
    console.log("I am the entire module!");
  };