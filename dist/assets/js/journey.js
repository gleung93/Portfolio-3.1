$(document).ready(function(){

    $(".journey-content").hide();
    $("#prev.journey-content").show();


    $(".journey-button").click(function() {
        var selected = (this.id);
    	if ($('#'+selected+'.journey-content').is(":hidden")) {
            $(".journey-content").fadeOut(function(){
                $('#'+selected+'.journey-content').fadeIn();
            });

        }
	});

    $(".button").click(function() {
        var selected = (this.id);
        if ($('.xdarken').is(":hidden")) { 
            $('#'+selected+'.annotate-box').fadeIn();
            $('#'+selected+'.annotate-text').fadeIn();
            $('.xdarken').fadeIn();
        } else {
            if ($('#'+selected+'.annotate-text').is(":visible")) {
                $('#'+selected+'.annotate-box').fadeOut();
                $('#'+selected+'.annotate-text').fadeOut();
                $(".xdarken").fadeOut();
            } else {
                $(".content").fadeOut();
                $(".content").promise().done(function(){
                    $('#'+selected+'.annotate-box').fadeIn();
                    $('#'+selected+'.annotate-text').fadeIn();
                });  
            }
        }
    });
});

