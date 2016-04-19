$(document).ready(function() {
	$('#search-hotel').click(function(evt) {
		evt.preventDefault();
		$('.search-form').slideToggle(500);
	}); // end click
}); // end ready