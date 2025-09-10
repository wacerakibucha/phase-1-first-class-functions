//  receivesAFunction(callback)
// takes a callback function as an argument
// calls the callback function
function receivesAFunction(callback) {
  return callback();
}

// returnsANamedFunction()
// returns a named function
function returnsANamedFunction() {
  function namedFn() {
    return "I am a named function!";
  }
  return namedFn;
}

// returnsAnAnonymousFunction()
// returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    return "I am an anonymous function!";
  };
}

// Export functions so tests can import them
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
