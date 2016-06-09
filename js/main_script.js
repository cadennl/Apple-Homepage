
$(document).ready(function()
{

loadSliderButton();


function loadSliderButton()
{
var currentButton = $('.one');
$('.one').addClass('circle-click');

$('.circle-link').hover(
	function() { $(this).addClass('circle-hover'); },
	function() {$(this).removeClass('circle-hover'); }
	);
$('.circle-link').click(function()
{
	$(currentButton).removeClass('circle-click');
	$(this).addClass('circle-click');
	currentButton = $(this);
	
});
}



});
