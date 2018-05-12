$(function ()
{
	$("a").attr('target', '_blank');

	if ($(window).width() < 1080) {
		$(document).scroll(function() 
		{
			$('body').css('background-position', '0px ' + $(document).scrollTop() + 'px');
		});
	}

});
