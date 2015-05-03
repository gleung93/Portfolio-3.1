$(document).ready(function(){
    $('#experience-text2, #experience-text3').hide();
    $('#experience-text1').addClass("item-selected");
    $(".triangle-up").offset({"left": ($('#experience-logo1').offset().left + ($('#experience-logo1').width()) / 2) - 20 })
    
    $('#experience-logo1').click(function() {
        $(".triangle-up").animate({"left": ($('#experience-logo1').offset().left + ($('#experience-logo1').width()) / 2) - 20 },'slow','swing')
        $('.item-selected').fadeOut('slow','swing', function(){
            $('#experience-text1').fadeIn('slow');
            $('.item-selected').removeClass("item-selected");
            $('#experience-text1').addClass("item-selected");
        });
    });

    $('#experience-logo2').click(function() {
        $(".triangle-up").animate({"left": ($('#experience-logo2').offset().left + ($('#experience-logo2').width()) / 2) - 20 },'slow','swing')
        $('.item-selected').fadeOut('slow','swing', function(){
            $('#experience-text2').fadeIn('slow');
            $('.item-selected').removeClass("item-selected");
            $('#experience-text2').addClass("item-selected");
        });
    });

    $('#experience-logo3').click(function() {
        $(".triangle-up").animate({"left": ($('#experience-logo3').offset().left + ($('#experience-logo3').width()) / 2) - 20 },'slow','swing')
        $('.item-selected').fadeOut('slow','swing', function(){
            $('#experience-text3').fadeIn('slow');
            $('.item-selected').removeClass("item-selected");
            $('#experience-text3').addClass("item-selected");
        });
    });
});
