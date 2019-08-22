'use strict';



$(function() {
    $('.folio-menu a').click(function (event) {
        event.preventDefault();
        let href = $(this).attr('href');
        let target = $(href);
        let top = target.offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 1000);
    });
});

$(function() {
    $('.mob-folio-menu a').click(function (event) {
        event.preventDefault();
        let href = $(this).attr('href');
        let target = $(href);
        let top = target.offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 1000);
    });
});