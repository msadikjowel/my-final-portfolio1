$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        // scroll top

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        }
    });



    // smoth scrolling

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});





// download button clicked alert message
var a = document.getElementsByClassName('beta');

for (var i = 0; i < a.length; i++) {
    (function (index) {
        a[index].addEventListener("click", function () {
            alert('This function still on beta testing.')
        })
    })(i);
}