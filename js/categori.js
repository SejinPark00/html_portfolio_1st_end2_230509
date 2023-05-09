$(function(){
    $('.categori > li').mouseenter(function(){
        $('.camenu').stop().hide()
        $(this).find('.camenu').stop().fadeIn();
    }).mouseleave(function(){
        $('.camenu').stop().hide()
    });
});

$(function(){
    $('.camenu > li').mouseenter(function(){
        $('.casub').stop().hide()
        $(this).find('.casub').stop().fadeIn();
    }).mouseleave(function(){
        $('.casub').stop().hide()
    });
});