let clicks = 0;
const resetButton = document.createElement('button');

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
	pic.setAttribute('id', catList[i].name);

	catLi.addEventListener('click', (function(picCopy) {
		return function() {
			const catPicFrame = document.querySelector('div.show-cat');
				
			if(catPicFrame.hasChildNodes() === true) {
				const catPic = catPicFrame.firstChild;
				catPicFrame.removeChild(catPic);
			}

			catPicFrame.appendChild(picCopy);	
			addCounter(i);
		};
	})(pic));

	pic.addEventListener('click', (function(picCopy) {
		return function() {
			clicks++;
			const para = document.querySelector('.click-notification p');

			if(clicks === 1) {
				para.textContent = `You have clicked ${catList[i].name} ${clicks} time.`;
			} else {
				para.textContent = `You have clicked ${catList[i].name} ${clicks} times.`;
			}
		};
	})(pic));
}

function addCounter(index) {
	clicks = 0;
	const clickNotification = document.querySelector('.click-notification');
	
	const counter = document.createElement('p');
	counter.textContent = `You have clicked ${catList[index].name} 0 times`;	
	clickNotification.appendChild(counter);

	resetButton.setAttribute('class', 'reset');
	resetButton.textContent = 'Reset';
	clickNotification.appendChild(resetButton);
}

