function hideUxSkills() {
    var myElements = document.querySelectorAll(".skillux");
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.left = "50%";
        myElements[i].style.top = "50%";
        myElements[i].style.opacity = "0";
    }
}


function distributeUxSkills() {

    var radius = 140;
    var skills = $('.skillux') 
    var container = $('.skill-container')
    var width = container.width()
    var height = container.height()
    var angle = 0
    var step = (2*Math.PI) / skills.length;
    
    skills.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }

        $(this).css({"opacity": "1", "left": x+'px', "top": y+'px'});
        angle += step;
    });
}

function hideDevSkills() {
    var myElements = document.querySelectorAll(".skilldev");
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.left = "50%";
        myElements[i].style.top = "50%";
        myElements[i].style.opacity = "0";
    }
}


function distributeDevSkills() {

    var radius = 140;
    var skills = $('.skilldev') 
    var container = $('.skill-container')
    var width = container.width()
    var height = container.height()
    var angle = 0
    var step = (2*Math.PI) / skills.length;
    
    skills.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }

        $(this).css({"opacity": "1", "left": x+'px', "top": y+'px'});
        angle += step;
    });
}

