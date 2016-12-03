(function($){
    "user strict"
	$(document).ready(function($) {

		/*MENU*/
		$(".icon-menu").click(function(event) {
			event.preventDefault();
			$("#wrapper").toggleClass('wrapper-active');

		});

		/*HEADER*/
		$(".ul-menu-main >li.sub-menu >a").click(function(event) {
			/* Act on the event */
			event.preventDefault();
			$(".ul-menu-main >li.sub-menu").removeClass('active')
			$(this).closest('li').addClass('active');
			$(".menu-secund").stop(false).slideUp();
			$(this).closest('li').find('.menu-secund').stop(false).slideToggle( "300", function() {
			    // Animation complete.
			  });
		});

		$(".container-toggle").click(function(event) {
			/* Act on the event */
			console.log("test")
			event.preventDefault();
			$(this).find(".toggle-card").toggleClass('toggle-card-active');
		});
	});




}(jQuery));
