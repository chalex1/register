$(function () {
	$('.dropdown-button').dropdown({
		belowOrigin: false, // Displays dropdown below the button
		constrain_width: false
	});
	$('select').material_select();
	$('.modal-trigger').leanModal();

});
