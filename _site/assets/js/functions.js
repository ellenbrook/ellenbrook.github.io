$(function() {
  smoothScroll(500);
  linkToBlogPost();
  setWorkSectionHeight();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function linkToBlogPost() {
    $('.blogList').on('click', function(){
         var address = $(this).find('.blogList-title a').attr('href');
         window.location.href = address;
    });
}

//get the height of the container and then center the work image
function setWorkSectionHeight() {
    var height = 0;
    var margin = 0;
         $('.workList').each(function(){
            height = $(this).height();
            margin = ((height-200) / 2);
        $(this).find('.workList-container-inner').css({"margin-top": margin+"px", "margin-bottom": margin+"px"});
        });
}

//Converts IMG SVG to inline SVG
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});