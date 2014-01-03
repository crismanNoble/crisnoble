//global radomized color pallette
var colors = ["#6F216C", "#F34B0D", "#C50102", "#5DA537", "#F1D81B"];

$(function() {
    $(".blackandwhite")
        .mouseover(function() {
            var src = $(this).attr("src").replace(".jpg", "over.jpg");
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("over.jpg", ".jpg");
            $(this).attr("src", src);
        });
});

//randomize the fill of an svg, in this case the .contact class
$(function() {
    $(".contact").hover(function() {
        var colors = ["#6F216C", "#F34B0D", "#C50102", "#5DA537", "#F1D81B"];
        var pick = Math.floor(Math.random()*5);
        var color = colors[pick];
        $(this).css('fill',color);
        },
        function() {
            $(this).css('fill','black');
            })
});

//randomize the fill of the icon SVGs
$(function() {
    $(".icon").hover(function() {
        var colors = ["#6F216C", "#F34B0D", "#C50102", "#5DA537", "#F1D81B"];
        var pick = Math.floor(Math.random()*5);
        var color = colors[pick];
        $(this).css('fill',color);
        },
        function() {
            $(this).css('fill','black');
            })
});

//randomize a link rollover color
$(function() {
    $(".randomLink")
        .mouseover(function() {
                   var colors = ["#6F216C", "#F34B0D", "#C50102", "#5DA537", "#F1D81B"];
                   var pick = Math.floor(Math.random()*5);
                   var colorN = colors[pick];
                   $(this).css('color',colorN);
				//$(this).css('border-color',colorN); 
                   })
        .mouseout(function() {
                  $(this).css('color','black');
				//$(this).css('border-color','black'); 
        });
});

//radomize the navigation rollovers
$(function() {
    $(".navLink").hover(function() {      
        var color = colors[Math.floor(Math.random()*5)];
        $(this).css('color', color);
		$(this).parent().css('border-color', color);
        },
        function() {
            $(this).css('color','black');
			$(this).parent().css('border-color', 'black');
            })
});

//open all links with rel="external" into a new window
//via http://blog.jerodsanto.net/2009/05/jquery-open-external-links-in-new-windowtab/
$(document).ready(function() {
  $('a[rel="external"]').click(function(){
    $(this).attr('target','_blank');
  });
});
     
       
//this will change the color of icons with the same class as the span hovered
$(function() {
    $("span.hover").hover(function() {      
        var color = colors[Math.floor(Math.random()*5)];
        var classTarget = "." + $(this).attr('class').split(/\s+/)[1];
        $(classTarget).css('fill', color);
        $(this).css('color', color);
        },
        function() {
            var classTarget = "." + $(this).attr('class').split(/\s+/)[1];
            $(classTarget).css('fill','black');
            $(this).css('color','black');
            })
});

//make the site tall enough
$(window).load(function(){
		var windowHt = $(window).height();
		var padding = windowHt - (215+19*8+40);
		$('#footer').css('padding-top', padding );
});
		
