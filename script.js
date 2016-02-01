$(document).ready(function(){
    $('#graphicMenu li').mouseenter(function(){
        $('.fadeOut',this).fadeTo(500,0.4);
        $('.textFadeOut',this).css('color','white');
    });
    $('#graphicMenu li').mouseleave(function(){
        $('.fadeOut',this).fadeTo('fast',100);
    $('.textFadeOut',this).css('color','#9595A2');
    });

    $('.buttons').mouseenter(function(){
        $(this).fadeTo('fast', 0.4);
    });
    
    $('.buttons').mouseleave(function(){
        $(this).fadeTo('fast', 100);
    });
    
    $('.link').mouseenter(function(){
        $(this).fadeTo('fast', 0.4);
    });
    
    $('.link').mouseleave(function(){
        $(this).fadeTo('fast', 100);
    });
});