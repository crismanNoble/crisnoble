$('#aboutLink').on('click',function(e){
	e.preventDefault();
	//console.log('you clicked on about');

	$('#about').removeClass('hidden');
	$('#aboutLink').addClass('active');

	$('#contact').addClass('hidden');
	$('#contactLink').removeClass('active');

	window.location.hash = '#about';
});

$('#contactLink').on('click',function(e){
	e.preventDefault();
	//console.log('you clicked on contact');

	$('#about').addClass('hidden');
	$('#aboutLink').removeClass('active');

	$('#contact').removeClass('hidden');
	$('#contactLink').addClass('active');

	window.location.hash = '#contact';

});

$('#projectsLink').on('click',function(e){
	// e.preventDefault();
	//console.log('you clicked on projects');
	window.location.hash = '#projects';
});

$('.headerBoundary').on('click',function(e){
	// e.preventDefault();
	//console.log('you clicked on the header');
	$(this).toggleClass('moar');
});

if ("onhashchange" in window) {
    window.onhashchange = locationHashChanged;
}

function locationHashChanged() {
	var hashish = window.location.hash;
	//console.log('hashchange occoured')

    if(hashish == '#about' || hashish == '#contact' || hashish == '#projects'){
		//console.log('it was a real page, ' +hashish)
		$(hashish+'Link').click();	
	}
}

document.addEventListener('DOMContentLoaded',function(){
	console.log('dom is ready')
	var hashish = window.location.hash;
	//console.log('you had a hash on page load, '+hashish);
	if(hashish == '#about' || hashish == '#contact' || hashish == '#projects'){
		//console.log('it was a real page')
		$(hashish+'Link').click();	
	} else {
		$('#aboutLink').click();	
	}
});



