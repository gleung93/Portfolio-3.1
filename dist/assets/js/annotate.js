$(document).ready(function(){

    $(".xdarken").hide();
    $("#education_box").hide();
    $("#education_text").hide();
    $("#glance_box").hide();
    $("#glance_text").hide();
    $("#details_box").hide();
    $("#details_text").hide();


    $("#education_button").click(function() {
    	if ($('#myDiv:not(:visible)')) {    // you get the idea...
    //perform your actions
		}
    	$('#education_box, #education_text, .xdarken').toggle(!$('#education_box').is(':visible'));
    	$('#glance_box, #glance_text').toggle(!$('#glance_box').is(':hidden'));
	});

	$("#glance_button").click(function() {
    	$('#glance_box, #glance_text, .xdarken').toggle(!$('#glance_box').is(':visible'));
    	$('#education_box, #education_text').toggle(!$('#education_box').is(':hidden'));
	});

});

