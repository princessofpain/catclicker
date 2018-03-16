const catPic = document.querySelector('.cat-pic');
const counter = document.querySelector('.counter');
const button = document.querySelector('.reset');
let clickCounter = 0;

catPic.addEventListener('click', function () {
	clickCounter++;

	if (clickCounter === 1) {
		counter.textContent = `${clickCounter} time`;
	} else {
		counter.textContent = `${clickCounter} times`;
	}
});

button.addEventListener('click', function () {
	clickCounter = 0;
	counter.textContent = `${clickCounter} times`;
});