$(document).ready(function(){
    $('.sobre1').click(function(){
        $('html').animate({
            scrollTop: $('#sobre').offset().top
        },1000)
    });

    $('.produtos1').click(function(){
        $('html').animate({
            scrollTop: $('#produtos').offset().top
        },1000)
    });

    $('.promocoes1').click(function(){
        $('html').animate({
            scrollTop: $('#promocoes').offset().top
        },1000)
    });
});