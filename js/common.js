$(document).ready(function(){

	//scroll menu
  var head = $('.header'),
    headList = $('.header nav');

  $(headList).on('click', 'a', function(e){

    e.preventDefault();
    var itemId = $(this).attr('href'),
      blockTop = $(itemId).offset().top;
    $('html, body').animate({scrollTop : blockTop - $(head).height()},900);

    if($(window).width() <= 910){
      $(head).removeClass('open');
      $(headList).slideToggle();
    }

  });

  //button scroll
  $('.banner-descr a, .action a').on('click', function(e){
		e.preventDefault();
		var itemId = $(this).attr('href'),
			blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop - $(head).height()},500);
	});

  //mob menu
  $('.menu-bar').on('click', function(){
    $('.header').toggleClass('open');
    $(headList).slideToggle();
  });

  //animation
  if ($(window).width() > 768) {
   (function($) {
			$.fn.animated = function(inEffect) {
				$(this).each(function() {
					var ths = $(this);
					ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
							ths.addClass(inEffect).css("opacity", "1");
						};
					}, {
						offset: "90%"
					});

				});
			};
		})(jQuery);
		$(".banner-descr span,.banner-descr h1,.banner-descr p,.section-title,.partner-subtitle,.action-text,.speakers-column,.map-column p,.organizer-text,.organizer-column").animated("fadeInUp", "fadeOutDown");
		$(".about-column__1,.ticket-column__1,.schedule-date").animated("fadeInLeft", "fadeOutDown");
		$('.about-column__2,.ticket-column__2,.schedule-col').animated("fadeInRight", "fadeOutDown");
		$(".advantages-title").animated("zoomIn", "fadeOutDown");
	}


});