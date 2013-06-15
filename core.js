$(document).ready(function() {  
 $('#callback_overlay').hide()
 $(function () {
             $('a.back_top').click(function () {
                 $('html, body').animate({
                     scrollTop: $(document).height()
                 },
                 1500);
                 return false;
             });
 
             $('a.back_top').click(function () {
                 $('html, body').animate({
                     scrollTop: '0px'
                 },
                 1500);
                 return false;
             });
         });

var window_height = $(window).height();
var callback_pos = window_height / 2;
var callback_pos_final = callback_pos - 100;

$('#callback').css({
         top: callback_pos 
    }, 700);


function show() {
    $('.inner.map').animate({
        marginTop: "100px"
    }, 700);
    $('#map_canvas').animate({
        opacity: "1"
    });
    $('.test').css({
        zIndex: "7"
    });
    $('a.close_map').delay(700).animate({
        marginTop: "-60px",
        opacity: "1"
    });
    $('.lost_msg').animate({
        opacity: "0"
    }, 300);
}

function hide() {
    $('.inner.map').animate({
        marginTop: "390px"
    }, 700);
    $('#map_canvas').animate({
        opacity: "0.5"
    });
    $('a.close_map').animate({
        opacity: "0",
    }, 200);
    $('.lost_msg').delay(500).animate({
        opacity: "1"
    }, 300);
    $('.test').css({
        zIndex: "5"
    }, 200);
    
    $('.lost_msg h1').replaceWith( "<h1>Phew... you've found us</h1>" );

}

function callback() {
    $('#callback_overlay').css({
         zIndex: "201",
         display: 'block'
    }, 700).animate({
         opacity: "0.9"
    }, 700);
  
    $('#callback').css({ 
        display: "block"
    });
    $('#callback').animate({
         opacity: "1",
         top: callback_pos_final
    }, 1000);
}

function close_callback() {
   
    $('#callback_overlay').animate({
         opacity: "0"
    }, 700, function() {
         $('#callback_overlay').css({
         zIndex: "0",
         display: 'none'
    }, 700);
    });
    $('#callback').css({ 
        display: "none"
    });
    $('#callback').animate({
         opacity: "0",
         top: callback_pos_final
    }, 1000);
}




    $('a.show_map').click(function () {
           show();
        });
    
    $('a.close_map').click(function () {
          hide();
        });

     $('a.callback').click(function () {
           callback();
        });
      $('.close').click(function () {
           close_callback();
        });

	$('#home .dropper').delay(300).animate({
        opacity: "1",
        marginTop: "0px"
    }, 800);
    
   

    $('#home .master').delay(1200).animate({
        opacity: "1"
    }, 1500);


    

    $('.portfolio_wrapper').cycle({ 
        fx:     'fade', 
        speed:  'slow', 
        timeout: 7000, 
        pager:  '#port_nav', 
        pagerAnchorBuilder: function(idx, slide) { 
             // return selector string for existing anchor 
            return '#port_nav li:eq(' + idx + ') a'; 
        }
    });
    $('.service_wrapper').cycle({ 
        fx:     'fade', 
        speed:  'slow', 
        timeout: 0, 
        pager:  '#services_nav', 
        pagerAnchorBuilder: function(idx, slide) { 
             // return selector string for existing anchor 
            return '#services_nav a li:eq(' + idx + ')'; 
        }
    });

    $('.structure_wrapper').cycle({ 
        fx:     'fade', 
        speed:  'slow', 
        timeout: 0, 
        pager:  '#structure_nav', 
        pagerAnchorBuilder: function(idx, slide) { 
             // return selector string for existing anchor 
            return '#structure_nav a li:eq(' + idx + ')'; 
        }
    });
    $('.labs').mouseover(function () {
        function bubbleLoop() {
            $('.bubbles').show("fast")
                .animate({opacity: '1', marginTop: '-34px'},400)
                .animate({marginTop:"-44px", opacity: '0'},500)
                .animate({marginTop:"-26px"},200)
                .hide("fast", bubbleLoop);
            }
        bubbleLoop();
    });
    $('.labs').mouseout(function () {
            $('.bubbles').stop(true).animate({
                opacity: '0',
                marginTop: '-25px'
            }, 200);
        });

   
});