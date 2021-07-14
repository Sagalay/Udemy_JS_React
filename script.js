'use strict';

const arr = [1, 22, 13, 4, 75];

console.log(arr.sort(compareNum));

function compareNum(a, b) {
  return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(elem, i, arr) {
//   console.log(`Елемент ${elem} с индексом: ${i} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const str = 'Test'.split('').reverse().join('');
// console.log(str);
// for (let value of str) {
//   console.log(value);
// }

// for (let value of arr) {
//   console.log(value);
// }