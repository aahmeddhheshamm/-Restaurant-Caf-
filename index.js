/*$(document).ready(function () {
    $(window).on('resize', function () {

        if ($(window).width() < 1200 && $(window).width() > 768) {
            $(".row .col-md-4 .row .col-md-12 div").css({
                'width': '300px',
                'hieght': '300px'


            })
        }

    });

});*/
$(window).on("load", function() {
    setTimeout(function() {
      scrollTo(0, 0);
    });
  });
  $(".loading ul").fadeOut(6000, function() {
    $(this)
      .parent()
      .fadeOut(2000);
  });

$(".go").on("click", function () {
    console.log("gooooooooo");
    $("html , body").animate({
        'scrollTop': $(".aboutusHome").offset().top
    }, 1500)
    $("body").css("overflow", "auto");
})
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1100
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});