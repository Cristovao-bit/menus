$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });
    
    var type = new Typed('.type', {
        strings:[
            "Notebooks",
            "Desktops",
            "WebSites"
        ],
        typeSpeed: 250,
        cursorChar: '_',
        backDelay: 200,
        loop: true
    });
});

