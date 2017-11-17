$(function () {
	//hàm setInterval
	$('.ads').addClass('show');
	$('.grey').addClass('show');

	var ads = setInterval(function() {
		$('.ads').removeClass('show');
		$('.grey').removeClass('show');
		clearInterval(ads);
	},5000);


	//hiện modal ra
	$('.open1').on('click',function(event) {
		event.preventDefault();
		$('.modal1').addClass('show');
		$('.grey').addClass('show');
	});

	//đóng modal lại
	$('.close').on('click',function(event) {
		event.preventDefault();
		$('.modal1').removeClass('show');
		$('.grey').removeClass('show');
	});

	$('.grey').on('click',function(event) {
		event.preventDefault();
		$('.modal1').removeClass('show');
		$('.grey').removeClass('show');
	});

//------------------------------------------------

	$('.open2').on('click',function(event) {
		event.preventDefault();
		$('.modal2').addClass('show');
		$('.grey').addClass('show');
	});

	//đóng modal lại
	$('.close').on('click',function(event) {
		event.preventDefault();
		$('.modal2').removeClass('show');
		$('.grey').removeClass('show');
	});

	$('.grey').on('click',function(event) {
		event.preventDefault();
		$('.modal2').removeClass('show');
		$('.grey').removeClass('show');
	});

//------------------------------------------------

	$('.open3').on('click',function(event) {
		event.preventDefault();
		$('.modal3').addClass('show');
		$('.grey').addClass('show');
	});

	//đóng modal lại
	$('.close').on('click',function(event) {
		event.preventDefault();
		$('.modal3').removeClass('show');
		$('.grey').removeClass('show');
	});

	$('.grey').on('click',function(event) {
		event.preventDefault();
		$('.modal3').removeClass('show');
		$('.grey').removeClass('show');
	});

//------------------------------------------------

	$('.open4').on('click',function(event) {
		event.preventDefault();
		$('.modal4').addClass('show');
		$('.grey').addClass('show');
	});

	//đóng modal lại
	$('.close').on('click',function(event) {
		event.preventDefault();
		$('.modal4').removeClass('show');
		$('.grey').removeClass('show');
	});

	$('.grey').on('click',function(event) {
		event.preventDefault();
		$('.modal4').removeClass('show');
		$('.grey').removeClass('show');
	});


//------------------------------------------------

	$('.open5').on('click',function(event) {
		event.preventDefault();
		$('.modal5').addClass('show');
		$('.grey').addClass('show');
	});

	//đóng modal lại
	$('.close').on('click',function(event) {
		event.preventDefault();
		$('.modal5').removeClass('show');
		$('.grey').removeClass('show');
	});

	$('.grey').on('click',function(event) {
		event.preventDefault();
		$('.modal5').removeClass('show');
		$('.grey').removeClass('show');
	});

});