$(document).ready(function(){

    $(".journey-content").hide();
    $(".journey-button").fadeTo(1, .4);
    $("#prev.journey-content").show();
    $("#prev.journey-button").fadeTo(1, 1);

    $(".journey-button").click(function() {
        var selected = (this.id);
    	if ($('#'+selected+'.journey-content').is(":hidden")) {
            $(".journey-content").fadeOut();
            $('.journey-button').fadeTo(500, 0.4);
            $(".journey-content").promise().done(function(){
                $('#'+selected+'.journey-content').fadeIn();
                $('#'+selected+'.journey-button').fadeTo(500, 1);
            });
        }
	});
});

