function navOpener() {
    $('.nav_opener').on('click', function () {
        if($('body').hasClass('active')){
            $('body').removeClass('active');
        }else {
            $('body').addClass('active');
        }
    });
}

$( function() {
    navOpener();

    $( "#services_tabs" ).tabs();
    $( "#portfolio_tabs" ).tabs();
    $('.quote_slide').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        dots:true
    });

    $('.services_list li a').click(function () {
        if ($(window).width() <= 425) {
            var self = this;
            $([document.documentElement, document.body]).animate({
                scrollTop: $($(self).attr('href')).offset().top
            }, 500);
        }
    })
} );


