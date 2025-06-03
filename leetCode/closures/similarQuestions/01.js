// Write a function createSimpleCounter that returns a function. Each time that function is called, it should return a number 1 higher than the last time.

function createSimpleCounter(n) {
  return function () {
    return n++;
  };
}

const counter = createSimpleCounter(2);

console.log(counter());
console.log(counter());
console.log(counter());
