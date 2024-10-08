function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction () {
  function namedFunction() {
    console.log("Hello function");
  }
  return namedFunction;
}
const myFunc = returnsANamedFunction();
myFunc();

function returnsAnAnonymousFunction() {
  return function () {
    console.log("anonymous function");
  }
}
const myAnonymous = returnsAnAnonymousFunction();
myAnonymous();
