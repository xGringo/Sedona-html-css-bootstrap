$(function() {
	$( "#slider-range" ).slider({
	  step: 50,
	  range: true,
	  min: 0,
	  max: 3000,
	  values: [ 0, 2500 ],
	  slide: function( event, ui ) {
	    $( "#amount-1" ).val( "ОТ " + ui.values[ 0 ]  );
	    $( "#amount-2" ).val( " ДО " + ui.values[ 1 ] );
	  }
	});
	$( "#amount-1" ).val( "ОТ " + $( "#slider-range" ).slider( "values", 0 ) );

	$( "#amount-2" ).val(" ДО " + $( "#slider-range" ).slider( "values", 1 ) );
});