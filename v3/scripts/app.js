$('#aboutLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on about');
});

$('#contactLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on contact');
});

$('#projectsLink').on('click',function(e){
	e.preventDefault();
	console.log('you clicked on projects');
});

$('#about').removeClass('hidden');