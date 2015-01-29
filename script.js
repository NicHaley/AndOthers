$(document).ready(function() {

	 $("#audio")[0].play();

	$('#musician-bg').hide();

	$('#bookmark').hide();

    setTimeout(function(){
        $('#musician-bg').fadeIn(8000);
    }, 500);

	 setTimeout(function(){
        $('#bookmark').fadeIn(8000);
    }, 4000);    

});