$(document).ready(function(){

    $(".xdarken").hide();
    $(".content").hide();


    $(".rollover-circle").click(function() {
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

