

$(function () {

	// ========================== Model ============================= //
	// store all the data like in a database, without functions
	var model = {
		//currentCat: null,
		catList: [],
		// prototype object for creating individual cat objects
		Cat: function (name, url, alt, clicks) {
			this.name = name;
			this.url = url;
			this.alt = alt;
			this.clicks = clicks;
		},

		init: function () {
			// 5 new cat objects including name, url and alt text
			const cat1 = new model.Cat('Ian', 'https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg', 'cat in a shark', 0);
			const cat2 = new model.Cat('Rocket', 'http://www.veryfunnycatsvideos.com/wp-content/uploads/2016/08/funny-cat-and-dog-dancing-and-si.jpg', 'cat singing', 0);
			const cat3 = new model.Cat('Lily', 'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cat-burger-bed-maru-6.jpg', 'cat burger', 0);
			const cat4 = new model.Cat('Sammy', 'https://i0.wp.com/justcatvideos.co/wp-content/uploads/2017/12/The-Most-Cute-and-Funny-Cat-Videos-Compilation-The-best-cat-videos-week.jpg?w=1170', 'cat puts the head on a table', 0);
			const cat5 = new model.Cat('Joel', 'https://welovecatsandkittens.com/wp-content/uploads/2015/10/box-5.jpg', 'cat in a box', 0);

			model.catList = [cat1, cat2, cat3, cat4, cat5];
		},

		setClicks: function (index) {
			model.catList[index].clicks += 1;
		},

		resetClicks: function (index) {
			model.catList[index].clicks = 0;
		},

		allCats: function () {
			return model.catList;
		}
	};

	// ========================== Controller ============================= //
	// connect the model (like a database) and the view(the gui) through functions here
	var octopus = {

		init() {
			model.init();
			view.renderList();
		},

		getCatArray: function () {
			return model.allCats();
		},

		changeClicks: function (i) {
			model.setClicks(i);
		},

		resetClicks: function (i) {
			model.resetClicks(i);
		}
	};

	// ========================== View ============================= //
	var view = {

		renderList: function () {

			const catArray = octopus.getCatArray();

			for (let i = 0; i < catArray.length; i++) {
				// create a new list element for every cat and add the name of the cat as textContent
				$('.cat-ul').append(`<li id='${[i]}'>${catArray[i].name}</li>`);
				const catLi = $(`#${[i]}`);
				const catName = catArray[i].name;
				const pic = `<img src='${catArray[i].url}' alt='${catArray[i].alt}' id='${i}'>`;

				//eventListener for click on a list element
				catLi.click(function (picCopy) {
					return function () {
						view.removePicture();

						// add the new cat picture to the DOM and reset the counter
						$('div.show-cat').append(picCopy);
						const index = $('img').attr('id');
						const newCatArray = octopus.getCatArray();
						$('.counter').text(`You clicked ${catName} ${newCatArray[index].clicks} time/s`);
					};
				}(pic));
			}

			$('.show-cat').click(function () {
				const index = $('img').attr('id');
				octopus.changeClicks(index);
				view.renderCounter();
			});

			$('.reset-button').click(function () {
				const index = $('img').attr('id');
				octopus.resetClicks(index);
				view.renderCounter();
			});
		},

		renderCounter: function () {
			const index = $('img').attr('id');
			const newCatArray = octopus.getCatArray();
			$('.counter').text(`You clicked ${newCatArray[index].name} ${newCatArray[index].clicks} time/s`);
		},

		removePicture: function () {
			$('div.show-cat').children().remove();
			$('.counter').text('');
		}
	};
	octopus.init();
});