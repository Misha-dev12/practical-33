// 'use strict';

// 1. Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент <div id="text"> зникав.

// let div = document.querySelector('#text');
// let button = document.querySelector('#button');

// button.addEventListener('click', () => {
// 	div.remove();
// });

// 2. Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.querySelector('#button');
// function remove() {
// 	this.remove();
// }
// button.addEventListener('click', remove);

// 3. Створіть меню, яке відкривається/згортається після кліку.

// const select = document.querySelector('.select');
// const title = document.querySelector('.title');
// const list = document.querySelector('.list');

// title.addEventListener('click', () => {
// 	select.classList.toggle('open');
// });

// 4. Є список повідомлень. За допомогою JavaScript для кожного повідомлення додайте у верхній правий
// кут кнопку закриття.

// const texts = document.querySelectorAll('.text');
// 	texts.forEach(item => {
//     const button = item.querySelector('.button');
// 		button.addEventListener('click', () => {
// 			item.remove();
// 		});
// 	});

// 5. Нехай м’яч переміщається при натисканні на поле, туди, де був клік

// const field = document.querySelector('.field');
// const ball = document.querySelector('.ball');

// field.addEventListener('click', event => {
// 	const fieldPosition = field.getBoundingClientRect();
// 	const ballDiameter = ball.offsetWidth;

// 	let ballX = event.clientX - fieldPosition.left - ballDiameter / 2;
// 	let ballY = event.clientY - fieldPosition.top - ballDiameter / 2;

// 	if (ballX < 0) ballX = 0;
// 	if (ballY < 0) ballY = 0;
// 	if (ballX + ballDiameter > fieldPosition.width)
// 		ballX = fieldPosition.width - ballDiameter;
// 	if (ballY + ballDiameter > fieldPosition.height)
// 		ballY = fieldPosition.height - ballDiameter;

// 	ball.style.left = `${ballX}px`;
// 	ball.style.top = `${ballY}px`;
// });
