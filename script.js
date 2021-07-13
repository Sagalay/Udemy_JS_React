'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    borderColor: 'black',
    background: 'red',
  },
  makeTest() {
    console.log('Test');
  },
};

const { borderColor: border, background: bg, borderWidth = '50px' } = options.colors;
console.log(border);
console.log(bg);
console.log(parseInt(borderWidth));

console.log(options.name);

delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (const i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
  counter++;
}
console.log(counter);

console.log(Object.keys(options).length);
