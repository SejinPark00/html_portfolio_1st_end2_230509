$(function(){function prev(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-1500);
    $('.slide').stop().animate({marginLeft:0},800);
}

function next(){
    $('.slide').stop().animate({marginLeft:-1500}, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css('margin-left',0);
    });
}

function slide(){
    $('.slide').stop().animate({marginLeft:-1500}, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css('margin-left',0);
    });
}
setInterval(slide, 5000);

$('.prev').click(function(){
    prev();
});

$('.next').click(function(){
    next();
});
});
