$('.submit').on('click', function(){
		var isValid = true;
		if ($('#name').val().trim() == '') {
			$('.error1').text('Invalid!');
			isValid = false;
		} else {
			$('.error1').text('');
		}


		if ($('#email').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) == null) {
			$('.error2').text('Invalid!');
			isValid = false;
		} else {
			$('.error2').text('');
		}



		if ($('#password').val().trim() == '') {
			$('.error3').text('Invalid!');
			isValid = false;
		} else {
			$('.error3').text('');
		}



		if ($('#address').val().trim() == '') {
			$('.error4').text('Invalid!');
			isValid = false;
		} else {
			$('.error4').text('');
		}

		if ($('#number').val().match(/^[0-9]+$/) == null) {
			$('.error5').text('Invalid!');
			isValid = false;
		} else {
			$('.error5').text('');
		}

		if ($('#facebook').val().trim() == '') {
			$('.error6').text('Invalid!');
			isValid = false;
		} else {
			$('.error6').text('');
		}

		if ($('#dob').val().match(/^([0-9]{0,2})-([0-9]{0,2})-([0-9]{0,4})$/) == null) {
			$('.error7').text('Invalid!');
			isValid = false;
		} else {
			$('.error7').text('');
		}

		var radio1 = document.getElementById('male').checked;
		var radio2 = document.getElementById('female').checked;

		if ((radio1 == "") && (radio2 == "")) {
			$('.error8').text('Invalid!');
			isValid = false;
		} else {
			$('.error8').text('');
		}

		if (isValid != false) {
			showData();
		}
	});




function showData () {

	$('#title').html('Sign up successfully!!!');
	$('#container').css("display", "none");
	$('#end').css("display", "");

	var name = $('#name').val();
	$('#lbname').html(name);

	var email = $('#email').val();
	$('#lbemail').html(email);

	var pass = $('#password').val();
	$('#lbpassword').html(pass);

	var add = $('#address').val();
	$('#lbaddress').html(pass);

	var number = $('#number').val();
	$('#lbphone').html(number);

	var dob = $('#dob').val();
	$('#lbdob').html(dob);

	var fb = $('#facebook').val();
	$('#lbfb').html(fb);

	var sex = [];
	$('input[type=radio]').each(function() {
		if ($(this).is(":checked")) {
			sex.push($(this).attr('value'));
		}
	});
	$('#lbsex').html(sex);

}