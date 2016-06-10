




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
	slideImages(currentButton);	
});
}

function slideImages(slideNumber)
{
	console.log(slideNumber);
	console.log($('.promo-image'));
	if ($(slideNumber).hasClass('one'))
	{
		$('.promo-image').removeClass('second-slide-trans third-slide-trans');
		$('.promo-image').addClass('first-slide-trans');
		console.log($('.promo-image'));
	}
	if(slideNumber.hasClass('two'))
	{
		$('.promo-image').removeClass('first-slide-trans third-slide-trans');
		$('.promo-image').addClass('second-slide-trans');
	}
	if(slideNumber.hasClass('three'))
	{
		$('.promo-image').removeClass('first-slide-trans second-slide-trans');
		$('.promo-image').addClass('third-slide-trans');
	}

}

});
