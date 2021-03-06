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

$(document).ready(function(){
  $('#below').css('margin-top', $('#landing').outerHeight());

  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

  if (isMobile == true) {
    $("#landing").removeClass("gradient-animate");
  }
});

$(window).on('scroll', function() {
    var landing_height = $('#landing').outerHeight();
    var y_scroll_pos = window.pageYOffset;

    if(y_scroll_pos > landing_height) {
      $("#landing").removeClass("gradient-animate");
      $(".landing-arrow").hide();
    }
    if(y_scroll_pos < landing_height) {
      $("#landing").addClass("gradient-animate");
      $(".landing-arrow").show();
    }
});

var colors = new Array(
  [106,207,184],
  [90,129,124],
  [110,153,190],
  [80,160,150]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.0015;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient-animate').css({
   background: "-webkit-gradient(linear, left top, left bottom, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

$(document).ready(function(){
    $('#experience-text2, #experience-text3').hide();
    $('#experience-text1').addClass("item-selected");
    $("#experience-text1, #experience-text3").css({'height':($("#experience-text2").height()+'px')});
    $(".triangle-up").offset({"left": ($('#experience-logo1').offset().left + ($('#experience-logo1').width()) / 2) - 20 })
    
    $('#experience-logo1').click(function() {
        $("#experience-text1").css({'height':($("#experience-text2").height()+'px')});
        if ($('#experience-text1').is(":hidden")){
            $(".triangle-up").animate({"left": ($('#experience-logo1').offset().left + ($('#experience-logo1').width()) / 2) - 20 },'slow','swing')
            $('.item-selected').fadeOut('slow','swing', function(){
                $('#experience-text1').fadeIn('slow');
                $('.item-selected').removeClass("item-selected");
                $('#experience-text1').addClass("item-selected");
            });
        }
    });

    $('#experience-logo2').click(function() {
        if ($('#experience-text2').is(":hidden")){
            $(".triangle-up").animate({"left": ($('#experience-logo2').offset().left + ($('#experience-logo2').width()) / 2) - 20 },'slow','swing')
            $('.item-selected').fadeOut('slow','swing', function(){
                $('#experience-text2').fadeIn('slow');
                $('.item-selected').removeClass("item-selected");
                $('#experience-text2').addClass("item-selected");
            });
        }
    });

    $('#experience-logo3').click(function() {
        $("#experience-text3").css({'height':($("#experience-text2").height()+'px')});
        if ($('#experience-text1').is(":hidden")){
            $(".triangle-up").animate({"left": ($('#experience-logo3').offset().left + ($('#experience-logo3').width()) / 2) - 20 },'slow','swing')
            $('.item-selected').fadeOut('slow','swing', function(){
                $('#experience-text3').fadeIn('slow');
                $('.item-selected').removeClass("item-selected");
                $('#experience-text3').addClass("item-selected");
            });
        }
    });
});