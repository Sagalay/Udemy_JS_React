'use strict';

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//   let objCopy = {};

//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const obj = {
  a: 22,
  b: 13,
};

const testObj = Object.assign({}, obj);

testObj.a = 0;

// console.log(obj);
// console.log(testObj);

// const oldArray = ['a', 'b', 'c', 'd'];
// const newArray = oldArray.slice();
// newArray[1] = 'qqqqqqwwwe';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, '&&&' , ...blogs, 'vk'];

// console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7, 10];

log(...num);

const array = ['a', 'b'];

const newArr = [...array];

const q = {
  one: 1,
  two: 2
};

const newObj = {...q};

console.log(newObj);