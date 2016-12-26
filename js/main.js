$(function() {

	function owlInit () {
		var owl = $('.owl-carousel');

		owl.owlCarousel({
			loop:true,
			items: 1,
			dots: true,
			navContainer: 'card__custom-nav'
		});

		$('.js--card__custom-nav-prev').on('click', function () {
			owl.trigger('prev.owl.carousel');
		});

		$('.js--card__custom-nav-next').on('click', function () {
			owl.trigger('next.owl.carousel');
		});

		$('.card__custom-nav').after($('.owl-dots'));
	}

	owlInit();

	$('.js--card__color-item').on('click', function() {
		$('.js--card__color-item').removeClass('card__color-item--active');
		$(this).addClass('card__color-item--active');
		if($(this).hasClass('card__color-item--white')) {

			//ajax call
			$.getJSON('js/colors.json', function(data) {

				var cardSlider = $('.card__slider');
				var showData = $('.owl-carousel');

				showData.remove();

				var output = "<div class=\"owl-carousel\">";
				for(var i in data.ivory) {
					output +="<div class=\"owl-carousel__item\"><img src=\"images/prod/" + data.ivory[i].image + "\"></div>";
				}
				output += "</div>";
				cardSlider.prepend(output);

				$('.owl-dots').remove();

				owlInit(); // повторно вызываю функцию - так как не разобрался как адеквато произвести реинициализацию
			});

			$('.js--model-color').text('Ivory');
		} else {

			//ajax call
			$.getJSON('js/colors.json', function(data) {

				var cardSlider = $('.card__slider');
				var showData = $('.owl-carousel');

				showData.remove();

				var output = "<div class=\"owl-carousel\">";
				for(var i in data.black) {
					output +="<div class=\"owl-carousel__item\"><img src=\"images/prod/" + data.black[i].image + "\"></div>";
				}
				output += "</div>";
				cardSlider.prepend(output);

				$('.owl-dots').remove();

				owlInit(); // повторно вызываю функцию - так как не разобрался как адеквато произвести реинициализацию
			});

			$('.js--model-color').text('Black');
		}

	});

});