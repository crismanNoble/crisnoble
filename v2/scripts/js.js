$(document).ready(function(){
	$('.project p').hide();
	$('.project').hover(function(){
		$(this).find('p').toggle();
	});

	_tally.tick('hit','v2.0');

	$('.navigationLinks').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Navigation: ');
		} else {
			_tally.tick('click','Navigation: '+linkText);
		}
	});

	$('.inlineLink').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Inline: ');
		} else {
			_tally.tick('click','Inline: '+linkText);
		}
	});

	$('.projectLink').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Project: ');
		} else {
			_tally.tick('click','Project: '+linkText);
		}
	});

	$('.contactLink').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Contact: ');
		} else {
			_tally.tick('click','Contact: '+linkText);
		}
	});

	$('.blogLinks').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Blog: ');
		} else {
			_tally.tick('click','Blog: '+linkText);
		}
	});

	$('.footerLinks').click(function(e){
		linkText = $(this).text();
		if($(this).hasClass('externalLink')){
			_tally.click(e,'Footer: ');
		} else {
			_tally.tick('click','Footer: '+linkText);
		}
	});

});