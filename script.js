$(document).ready(function() {

	$("#audio")[0].loop = true;
	$("#audio")[0].play();

	$('.icon').click(function() {
		if ($("#audio")[0].paused == false) {
		    $("#audio")[0].pause();
		    // alert('music paused');
		} else {
		    $("#audio")[0].play();
		    // alert('music playing');
		}
	});

	$('#musician-bg').hide();

	$('#bookmark').hide();

    setTimeout(function(){
        $('#musician-bg').fadeIn(8000);
    }, 500);

	 setTimeout(function(){
        $('#bookmark').fadeIn(8000);
    }, 1000);  


	setTimeout(function(){
		$('.poem').show();

		var divs = $('#musician-bg, #bookmark');
	    limit = 600;

	    $(window).on('scroll', function() {
			var scrollPos = $(this).scrollTop();

		    if (scrollPos <= limit) {
		      divs.css({ 'opacity' : (1 - scrollPos/limit) });
			}
		});  
	}, 1000);

});