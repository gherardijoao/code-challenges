// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

console.log(createHelloWorld()());
