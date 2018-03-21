

$(function() {

	// ========================== Model ============================= //
	// store all the data like in a database, without functions
	var model = {
		//currentCat: null,
		catList: [],
		// prototype object for creating individual cat objects
		Cat: function(name, url, alt, clicks){
			this.name = name;
			this.url = url;
			this.alt = alt;
			this.clicks = clicks;
		},

		init: function() {
			// 5 new cat objects including name, url and alt text
			const cat1 = new model.Cat('Ean','https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg', 'cat in a shark', 0);
			const cat2 = new model.Cat('Rocket', 'http://www.veryfunnycatsvideos.com/wp-content/uploads/2016/08/funny-cat-and-dog-dancing-and-si.jpg',
				'cat singing', 0);
			const cat3 = new model.Cat('Lily', 'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cat-burger-bed-maru-6.jpg',
				'cat burger', 0);
			const cat4 = new model.Cat('Sammy', 'https://i0.wp.com/justcatvideos.co/wp-content/uploads/2017/12/The-Most-Cute-and-Funny-Cat-Videos-Compilation-The-best-cat-videos-week.jpg?w=1170',
				'cat puts the head on a table', 0);
			const cat5 = new model.Cat('Joel', 'https://welovecatsandkittens.com/wp-content/uploads/2015/10/box-5.jpg',
				'cat in a box', 0);

			model.catList = [cat1, cat2, cat3, cat4, cat5];
		},

		setClicks: function(index) {
			model.catList[index].clicks += 1;
		},

		resetClicks: function(index) {
			model.catList[index].clicks = 0;
		},

		allCats: function() {
			return model.catList;
		},

		setAdminValues(index, name ,url, clicks) {
			const currentCat = model.catList[index];

			if(name != '') {
				currentCat.name = name;
			}

			if(url != '') {
				currentCat.url = url;
			}

			if(clicks != '') {
				const clickNumber = parseInt(clicks);
				currentCat.clicks = clickNumber;
			}
		}
	};


	// ========================== Controller ============================= //
	// connect the model (like a database) and the view(the gui) through functions here
	var octopus = {

		init() {
			model.init();
			view.renderList();
			view.addListeners();
		},

		getCatArray: function() {
			return model.allCats();
		},

		changeClicks: function(i) {
			model.setClicks(i);
		},

		resetClicks: function(i) {
			model.resetClicks(i);
		},

		adminFunctions: function(adminIndex, adminName, adminUrl, adminClicks) {
			model.setAdminValues(adminIndex, adminName, adminUrl, adminClicks);
			view.removeList();
			view.renderList();
			view.setAdminPicture();
			view.renderCounter(adminIndex);
			view.emptyInputValue();
		}
	};


	// ========================== View ============================= //
	var view = {

		renderList: function() {
			view.initList();
		},

		addListeners() {
			view.listenToPic();
			view.listenToReset();
			view.listenToAdmin();
			view.listenToSave();
		},

		removeList: function() {
			$('li').remove();
		},

		initList: function() {
			const catArray = octopus.getCatArray();

			for(let i = 0; i < catArray.length; i++){
				// create a new list element for every cat and add the name of the cat as textContent
				$('.cat-ul').append(`<li id='${[i]}'>${catArray[i].name}</li>`);
				const catLi = $(`#${[i]}`);
				const catName = catArray[i].name;
				const pic = `<img src='${catArray[i].url}' alt='${catArray[i].alt}' id='${i}'>`;

				//eventListener for click on a list element
				catLi.click((function(picCopy) {
					return function() {
						view.removePicture();

						// add the new cat picture to the DOM and reset the counter
						$('div.show-cat').append(picCopy);
						const index = $('img').attr('id');
						const newCatArray = octopus.getCatArray();
						$('.counter').text(`You clicked ${catName} ${newCatArray[index].clicks} time/s`);
					};
				})(pic));
			}
		},

		listenToPic: function() {
			$('.show-cat').on('click', function() {
				const index = $('img').attr('id');
				octopus.changeClicks(index);
				view.renderCounter(index);
				$('.reset').css('display', 'inline');
				$('.admin').css('display', 'inline');
			});
		},

		listenToReset: function() {
			$('.reset').click(function() {
				const index = $('img').attr('id');
				octopus.resetClicks(index);
				view.renderCounter(index);
			});
		},

		listenToAdmin: function() {
			$('.admin').click(function() {
				$('.admin-input').css('display', 'block');
			});
		},

		listenToSave: function() {
			$('#save').click(function() {
				const adminIndex = $('img').attr('id');
				const adminName = $('#cat-name').val();
				const adminUrl = $('#cat-url').val();
				const adminClicks = $('#cat-clicks').val();

				octopus.adminFunctions(adminIndex, adminName, adminUrl, adminClicks);

				$('.admin-input').css('display', 'none');
			});
		},

		renderCounter: function(index) {
			const newCatArray = octopus.getCatArray();
			$('.counter').text(`You clicked ${newCatArray[index].name} ${newCatArray[index].clicks} time/s`);
		},

		removePicture: function() {
			$('div.show-cat').children().remove();
			$('.counter').text('');
			$('.admin-input').css('display', 'none');
		},

		setAdminPicture: function() {
			// add the new cat picture to the DOM
			const index = $('img').attr('id');
			const adminCatArray = octopus.getCatArray();
			$('img').attr('src', adminCatArray[index].url);
		},

		emptyInputValue: function() {
			$('#cat-name').val('');
			$('#cat-url').val('');
			$('#cat-clicks').val('');
		}
	};
	octopus.init();
});