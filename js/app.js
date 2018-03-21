

$(function() {

	// ========================== Model ============================= //
	// store all the data like in a database, without functions
	var model = {
		init: function() {

			// prototype object for creating individual cat objects
			const Cat = function(name, url, alt, clicks){
				this.name = name;
				this.url = url;
				this.alt = alt;
				this.clicks = clicks;
			};

			// 5 new cat objects including name, url and alt text
			const cat1 = new Cat('Ian','https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg', 'cat in a shark', 0);
			const cat2 = new Cat('Rocket', 'http://www.veryfunnycatsvideos.com/wp-content/uploads/2016/08/funny-cat-and-dog-dancing-and-si.jpg',
				'cat singing');
			const cat3 = new Cat('Lily', 'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cat-burger-bed-maru-6.jpg',
				'cat burger');
			const cat4 = new Cat('Sammy', 'https://i0.wp.com/justcatvideos.co/wp-content/uploads/2017/12/The-Most-Cute-and-Funny-Cat-Videos-Compilation-The-best-cat-videos-week.jpg?w=1170',
				'cat puts the head on a table');
			const cat5 = new Cat('Joel', 'https://welovecatsandkittens.com/wp-content/uploads/2015/10/box-5.jpg',
				'cat in a box');

			const catList = [cat1, cat2, cat3, cat4, cat5]; // eslint-disable-line no-unused-vars

			return catList;
		},

		// setClicks: function() {
		// 	const clicks = [0, 0, 0, 0, 0];
		// 	return clicks;
		// },

		// newClicks: function(newClicks) {
		// 	model.setClicks().clicks = newClicks;
		// }
	};


	// ========================== Controller ============================= //
	// connect the model (like a database) and the view(the gui) through functions here
	var octopus = {

		init() {
			model.init();
			view.renderList();
			// view.countClicks();
		},


		getCatArray: function() {
			return model.init();
		},

		// changeCatArray: function(newCatArray) {
		// 	model.newClicks(newCatArray);
		// }
	};


	// ========================== View ============================= //
	var view = {

		removePicture: function() {
			$('div.show-cat').children().remove();
			$('.counter').text('');
		},

		// resetPicture: function() {
		// 	$('.reset').addEventListener('click', function() {
		// 		$('.counter').text(`You have clicked ${catName} 0 times`);
		// 	});
		// },

		renderList: function() {

			const catArray = octopus.getCatArray();

			for(let i = 0; i < catArray.length; i++){
			// create a new list element for every cat and add the name of the cat as textContent
				$('.cat-ul').append(`<li id='${[i]}'>${catArray[i].name}</li>`);
				const catLi = $(`#${[i]}`);
				const pic = `<img src='${catArray[i].url}' alt='${catArray[i].alt}' id='${catArray[i].name}'>`;

				//eventListener for click on a list element
				catLi.click((function(picCopy) {
					return function() {
						view.removePicture();

						// add the new cat picture to the DOM and reset the counter
						$('div.show-cat').append(picCopy);
						$('.counter').text(`You clicked ${$('img').attr('id')} ${octopus.counter} time/s`);
					};
				})(pic));
			}
		},

		// countClicks: function() {
		// 	const catArray = octopus.getCatArray();

		// 	$('.showcat:first-child').click(function() {
		// 		console.log('!');
		// 		const index = $(`${$('img').attr('id')}`);
		// 		catArray[index].clicks += 1;
		// 		$('.counter').text(`You clicked ${$('img').attr('id')} ${catArray[index].clicks} time/s`);
		// 		octopus.changeCatArray(catArray);
		// 	});
		// },
	};
	octopus.init();
});