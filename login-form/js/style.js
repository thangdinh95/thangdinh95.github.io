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

	var sex = [];
	$('input[type=radio]').each(function() {
		if ($(this).is(":checked")) {
			sex.push($(this).attr('value'));
		}
	});
	$('#lbsex').html(sex);

	// var dob = $('#dob').val();
	// $('#lbdob').html(dob);

	// var sex = $('#sex').val();
	// $('#lbsex').html(sex);

}