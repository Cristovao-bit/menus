$(function () {
    $('.menu-ul li:has(ul)').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        }else{
            $('.menu-ul li ul').slideUp();
            $('.menu-ul li').removeClass('active');
            $(this).addClass('active');
            $(this).children('ul').slideDown();
        }
    });
});