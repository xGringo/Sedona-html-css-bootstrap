$(document).ready(function() {
	$('.menu-icon').click(function(evt) {
		evt.preventDefault();
		$('.mobile-menu').fadeToggle(200);
	}); // end click
	$('.close-icon').click(function(evt) {
		evt.preventDefault();
		$('.mobile-menu').fadeToggle(200);
	}); // end click
}); // end ready