'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '350px';
// box.style.borderRadius = '10px';

box.style.cssText = `background-color: blue; width: 350px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'cyan';
// }

hearts.forEach((item) => {
  item.style.backgroundColor = 'YellowGreen';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был текст');

div.classList.add('black');

// document.querySelector('.wrapper').append(div);

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = `<h1>Text</h1>`;
// div.textContent = `text`;

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
