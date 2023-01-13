$(document).ready(function() {
    $('.nav-icon').click(function (e){
        e.preventDefault();
        $('.navbar').addClass('active');
    });
    $('.nav-back').click(function (e){
        e.preventDefault();
        $('.navbar').removeClass('active');
    });
    $('.slider').slick({
        dots: true,
        arrows: false,
    });
    $('.product-group ul li').click(function (){
        $('li').removeClass('active');
        $(this).addClass('active');
    });
});
