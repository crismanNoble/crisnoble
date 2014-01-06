$('#aboutLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on about');

	$('#about').removeClass('hidden');
	$('#aboutLink').addClass('active');

	$('#contact').addClass('hidden');
	$('#contactLink').removeClass('active');
});

$('#contactLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on contact');

	$('#about').addClass('hidden');
	$('#aboutLink').removeClass('active');

	$('#contact').removeClass('hidden');
	$('#contactLink').addClass('active');

});

$('#projectsLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on projects');
});

$('#aboutLink').click();

