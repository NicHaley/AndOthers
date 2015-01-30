$(document).ready(function() {


	setTimeout(function(){
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
	}, 1000);

	$('#musician-bg').hide();

	$('#bookmark').hide();

    setTimeout(function(){
        $('#musician-bg').fadeIn(8000);
    }, 500);

	 setTimeout(function(){
        $('#bookmark').fadeIn(8000);
    }, 1000);  


	setTimeout(function(){
		$('.poem-container').show();

		var divs = $('#musician-bg, #bookmark');
	    limit = 600;
	    toggle = false;

	    $(window).on('scroll', function() {
			var scrollPos = $(this).scrollTop();
			var scrollPosBottom = ($(this).scrollTop() + $(window).height());

		    if (scrollPos <= limit) {
		      divs.css({ 'opacity' : (1 - scrollPos/limit) });
			}

			if ((scrollPosBottom >= $('#bottom-bound').offset().top) && toggle == false) {
				toggle = true;
				$('.poem-container').animate({ 
					backgroundColor: '#191919',
					color: 'white'
				}, 1000);
			}

			if ((scrollPosBottom < $('#bottom-bound').offset().top) && toggle == true) {
				toggle = false;
				$('.poem-container').animate({ 
					backgroundColor: 'white',
					color: '#191919'
				}, 1000);
			}
		});  
	}, 1000);

});