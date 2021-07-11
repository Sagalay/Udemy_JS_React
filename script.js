'use strict';

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage('Message!');
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(5, 8));
console.log(calc(8, 8));
console.log(calc(10, 8));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(ret());
console.log(anotherNum);

const logger = function () {
  console.log('Hello');
};

logger();

const calcArrow = (a, b) => a + b;

console.log(calcArrow(5, 10));
console.log(calcArrow(8, 10));
console.log(calcArrow(10, 10));
