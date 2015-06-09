$(document).ready(function(){
    $('.skill-circle').mouseover(function(){

        var radius = 140;
        var skills = $(this).siblings()
        var container = $('.skill-container')
        var width = container.width()
        var height = container.height()
        var angle = 0
        var step = (2*Math.PI) / skills.length;
    
        skills.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
            var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            $(this).css({"opacity": "1", "left": x+'px', "top": y+'px'});
            angle += step;
        });
    });

    $('.skill-circle').mouseleave(function(){
        $('.skill').css({"opacity": "0", "left": "50%", "top": "50%"});
    });


});

