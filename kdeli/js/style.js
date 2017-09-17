$(function () {
	$(window).scroll(function () {
                if ($(window).scrollTop() == 0) {
                    $('#top').stop(false, true).fadeOut(600);
                } else {
                    $('#top').stop(false, true).fadeIn(600);
                }
            });


	$('#top').click(function() {
		event.preventDefault();
		$('body').animate({scrollTop: 0}, 2000, "easeOutSine");
	});

	if ($('body').scrollTop() == 0) {
		$('#top').css("display", "none");
	} else {
		$('#top').css("display", "block");
	}
});
