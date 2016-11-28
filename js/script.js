$('.all-secs').css( {'height': (  $(window).height() )  } );

$('.all-secs').hide();

$('#sec1').show();

$('button').on('click', function() {
    // slide this section out of sight
    $('.all-secs').slideToggle();

    // show the next section - unless we are on the last section
		if ( $(this).attr("id") != "sec3" ) {
    	$(this).next().slideToggle();
    } else {
        $('#sec1').slideToggle();
    }
});
