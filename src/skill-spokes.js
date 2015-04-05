function distributeSkills() {
    var radius = 200;
    var skill = $('.skill') 
    var container = $('.skill-container')
    var width = skill-container.width()
    var height = skill-container.height()
    var angle = 0
    var step = (2*Math.PI) / skill.length;
    
    skill.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
}