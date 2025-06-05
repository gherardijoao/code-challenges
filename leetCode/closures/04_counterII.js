/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  const original = init;
  let x = init;
  return {
    increment: function () {
      x += 1;
      return x;
    },
    decrement: function () {
      x -= 1;
      return x;
    },
    reset: function () {
      x = original;
      return x;
    },
  };
};

const counter = createCounter(5);

console.log(counter.decrement());
