const count = 0;

const Cat = function(name, url, alt){

	this.name = name;
	this.url = url;
	this.alt = alt;
};

const cat1 = new Cat('Ian','https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg', 'cat in a shark');
const cat2 = new Cat('Rocket', 'http://www.veryfunnycatsvideos.com/wp-content/uploads/2016/08/funny-cat-and-dog-dancing-and-si.jpg',
	'cat singing');
const cat3 = new Cat('Lily', 'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cat-burger-bed-maru-6.jpg',
	'cat burger');
const cat4 = new Cat('Sammy', 'https://i0.wp.com/justcatvideos.co/wp-content/uploads/2017/12/The-Most-Cute-and-Funny-Cat-Videos-Compilation-The-best-cat-videos-week.jpg?w=1170',
	'cat puts the head on a table');
const cat5 = new Cat('Joel', 'https://welovecatsandkittens.com/wp-content/uploads/2015/10/box-5.jpg',
	'cat in a box');

const catList = [cat1, cat2, cat3, cat4, cat5];

const catListHtml = document.querySelector('.list-of-cats');
const catUl = document.createElement('ul');
catListHtml.appendChild(catUl);

for(let i = 0; i < catList.length; i++){
	const catLi = document.createElement('li');
	catLi.textContent = catList[i].name;
	catLi.setAttribute('class', `cat${i + 1}`);
	catUl.appendChild(catLi);

	const pic = document.createElement('img');
	pic.setAttribute('src', catList[i].url);
	pic.setAttribute('alt', catList[i].alt);

	catLi.addEventListener('click', (function(picCopy) {
		return function() {
			if(document.querySelector('.show-cat') !== null) {
				const activePic = document.querySelector('.show-cat');
				document.body.removeChild(activePic);
				activePic.classList.toggle('dont-show-cat');
				activePic.classList.remove('show-cat');
			}
			// it would be good to build a div here to wrap the picture because the class cannot be used for the
			picCopy.classList.remove('dont-show-cat');
			document.body.appendChild(picCopy);
			picCopy.classList.toggle('show-cat');
		};
	})(pic));
}



// const catPic1 = document.querySelector('.cat-pic1');
// const catPic2 = document.querySelector('.cat-pic2');
// const counter = document.querySelector('.counter');
// const button = document.querySelector('.reset');
// let clickCounterIan = 0;
// let clickCounterRocket = 0;

// const name1 = document.createElement('p');
// name1.textContent = 'My name is Ian';
// catPic1.appendChild(name1);

// const name2 = document.createElement('p');
// name2.textContent = 'My name is Rocket';
// catPic2.appendChild(name2);

// catPic1.addEventListener('click', function() {
// 	clickCounterIan++;
// 	clickTimes();
// });

// catPic2.addEventListener('click', function() {
// 	clickCounterRocket++;
// 	clickTimes();
// });

// function clickTimes() {
// 	if(clickCounterIan === 1 && clickCounterRocket === 1) {
// 		counter.textContent = `You clicked Ian ${clickCounterIan} time
// 		and Rocket ${clickCounterRocket} time`;
// 	} else if (clickCounterIan === 1 && clickCounterRocket != 1) {
// 		counter.textContent = `You clicked Ian ${clickCounterIan} time
// 		and Rocket ${clickCounterRocket} times`;
// 	} else if (clickCounterIan != 1 && clickCounterRocket === 1) {
// 		counter.textContent = `You clicked Ian ${clickCounterIan} times
// 		and Rocket ${clickCounterRocket} time`;
// 	} else if (clickCounterIan != 1 && clickCounterRocket != 1) {
// 		counter.textContent = `You clicked Ian ${clickCounterIan} times
// 		and Rocket ${clickCounterRocket} times`;
// 	}
// }

// button.addEventListener('click', function() {
// 	clickCounterIan = 0;
// 	clickCounterRocket = 0;
// 	counter.textContent = 'You clicked Ian and Rocket 0 times';
// });

