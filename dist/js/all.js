

$(function () {

	// ========================== Model ============================= //
	// store all the data like in a database, without functions
	const model = {
		init: function () {

			// array for storing unnamed objects based on Cat
			const catList = [];

			// prototype object for creating individual cat objects
			const Cat = function (name, url, alt, clicks) {
				this.name = name;
				this.url = url;
				this.alt = alt;
				this.clicks = clicks;

				catList.push(name);
			};

			// 5 new cat objects including name, url and alt text
			new Cat('Ian', 'https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg', 'cat in a shark', 0);
			new Cat('Rocket', 'http://www.veryfunnycatsvideos.com/wp-content/uploads/2016/08/funny-cat-and-dog-dancing-and-si.jpg', 'cat singing', 0);
			new Cat('Lily', 'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cat-burger-bed-maru-6.jpg', 'cat burger', 0);
			new Cat('Sammy', 'https://i0.wp.com/justcatvideos.co/wp-content/uploads/2017/12/The-Most-Cute-and-Funny-Cat-Videos-Compilation-The-best-cat-videos-week.jpg?w=1170', 'cat puts the head on a table', 0);
			new Cat('Joel', 'https://welovecatsandkittens.com/wp-content/uploads/2015/10/box-5.jpg', 'cat in a box', 0);

			return catList;
		}
	};

	// ========================== Controller ============================= //
	// connect the model (like a database) and the view(the gui) through functions here
	const octopus = {

		init() {
			model.init();
			view.init();
			view.renderList();
		},

		getAllCats: function () {
			model.init().catList;
		},

		addNewPicture: function () {
			view.init();
		}

		// reset: function() {
		// 	$('.reset').addEventListener('click', function() {
		// 		$('.counter').text(`You have clicked ${catName} 0 times`);
		// 	});
		// }
	};

	// ========================== View ============================= //
	const view = {
		init: function () {},

		removePicture: function () {
			$('div.show-cat').children().remove();
			$('.click-notification').children().remove();
		},

		// resetPicture: function() {
		// 	$('.reset').addEventListener('click', function() {
		// 		$('.counter').text(`You have clicked ${catName} 0 times`);
		// 	});
		// },

		renderList: function () {
			$('.list-of-cats').append('<ul class="cat-ul"></ul>');

			const catArray = octopus.getAllCats;

			for (let i = 0; i < catArray.length; i++) {
				// create a new list element for every cat and add the name of the cat as textContent
				$('.cat-ul').append(`<li>${catArray[i]}</li>`);

				// eventListener for click on a list element
				$('.cat-ul').children().addEventListener('click', function (cat) {
					return function () {
						view.removePicture();

						// add the new cat picture to the DOM and reset the counter
						$('div.show-cat').append(cat);
						$('.click-notification').text(`You clicked ${cat} ${cat.clicks} time/s`);
					};
				}(catArray));
			}
		},

		renderPicture: function () {
			const pic = $('<img/>');

			const catArray = octopus.getAllCats;

			for (let i = 0; i < catArray.length; i++) {

				// create img element and set the properties provided by the object (through the array)
				pic.attr('src', catArray[i].url);
				pic.attr('alt', catArray[i].alt);
				pic.attr('id', catArray[i].name);

				$('.click-notification').append(`<p class="counter">You have clicked ${catArray[i].name} 0 times</p>`);
				$('.click-notification').append('<button class="reset">Reset</button>');

				// eventListener for a click on a picture for changing the counter
				pic.addEventListener('click', function () {
					catArray.clicks++;

					if (catArray.clicks === 1) {
						$('.counter').text(`You have clicked ${catArray[i].name} ${catArray.clicks} time.`);
					} else {
						$('.counter').text(`You have clicked ${catArray[i].name} ${catArray.clicks} times.`);
					}
				});
			}
		}
	};
});