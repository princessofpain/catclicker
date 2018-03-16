const catPic1 = document.querySelector('.cat-pic1');
const catPic2 = document.querySelector('.cat-pic2');
const counter = document.querySelector('.counter');
const button = document.querySelector('.reset');
let clickCounterIan = 0;
let clickCounterRocket = 0;

const name1 = document.createElement('p');
name1.textContent = 'My name is Ian';
catPic1.appendChild(name1);

const name2 = document.createElement('p');
name2.textContent = 'My name is Rocket';
catPic2.appendChild(name2);

catPic1.addEventListener('click', function () {
	clickCounterIan++;

	if (clickCounterIan === 1 && clickCounterRocket === 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} time
		and Rocket ${clickCounterRocket} time`;
	} else if (clickCounterIan === 1 && clickCounterRocket != 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} time
		and Rocket ${clickCounterRocket} times`;
	} else if (clickCounterIan != 1 && clickCounterRocket === 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} times
		and Rocket ${clickCounterRocket} time`;
	} else if (clickCounterIan != 1 && clickCounterRocket != 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} times
		and Rocket ${clickCounterRocket} times`;
	}
});

catPic2.addEventListener('click', function () {
	clickCounterRocket++;

	if (clickCounterIan === 1 && clickCounterRocket === 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} time
		and Rocket ${clickCounterRocket} time`;
	} else if (clickCounterIan === 1 && clickCounterRocket != 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} time
		and Rocket ${clickCounterRocket} times`;
	} else if (clickCounterIan != 1 && clickCounterRocket === 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} times
		and Rocket ${clickCounterRocket} time`;
	} else if (clickCounterIan != 1 && clickCounterRocket != 1) {
		counter.textContent = `You clicked Ian ${clickCounterIan} times
		and Rocket ${clickCounterRocket} times`;
	}
});

button.addEventListener('click', function () {
	clickCounterIan = 0;
	clickCounterRocket = 0;
	counter.textContent = 'You clicked Ian and Rocket 0 times';
});