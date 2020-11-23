$(document).ready(function(){
  $("body").css("paddingTop",$("nav").outerHeight()) 
  //down the body//
  $("article").each(function(){
   $(this).height($(window).height()-$("nav").outerHeight()) 
  //each article will take window size - navbar 3lashan mayb2ash ta7teha//
    console.log("nav".outerHeight)
  });
});
$(document).ready(function(){
$('#owl').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      700: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

$(".card").each(function () {
  $(window).resize(function () {
      console.log($(window).width());
      if ($(window).width() <= 749) {
          $(".card").width("16rem");
      }
  });
});
});

var cardHeight;
// Sets the height of the back of the card to match the image in front
function setBackHeight() {
  cardHeight = $('.card .front img').height();
  $('.card .back').height(cardHeight);
}
$(document).ready(function() {
  $('.card').addClass('not-flipped');
  //Swap behavior of hover with click on touch devices
	if (Modernizr.touch){
		$('.card .back').prepend('<div class="cancel-card">\X</div>');
		$('.card.not-flipped').on('click', function() {
			$('.card').addClass('not-flipped');
			$(this).removeClass('not-flipped');
		});
		$('.cancel-card').click( function(ev) {
			ev.stopPropagation();
			$('.card').addClass('not-flipped');
		});
	} else {
		$('.card').hover(function() {
			$(this).toggleClass('not-flipped');
		});
	}
});
$(window).load(function() {
  // On window change, recalculate the size of the box
	window.onresize = function(){
		setBackHeight();
	}
	setBackHeight();
});