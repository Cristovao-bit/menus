$(function(){
    $('.menu_sidebar_config li:has(ul)').click(function (e){
        e.preventDefault();
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        }else{
            $('.menu_sidebar_config li ul').slideUp();
            $('.menu_sidebar_config li').removeClass('active');
            $(this).addClass('active');
            $(this).children('ul').slideDown();
        }
    });
    
    $('.sidebar_btn').click(function(){
        $('.menu_sidebar').toggleClass('active');
        $('.sidebar_btn').toggleClass('toggle');
    });
});