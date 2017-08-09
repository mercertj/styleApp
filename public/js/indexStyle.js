var color = $('.color').hide();
var front = $('.front').show();
var one = $('.pg1').hide();
var three = $('.pg3').hide();
var four = $('.pg4').hide();
var five = $('.pg5').hide();


$('#modal-btn-one').on('click', function() {
    $('#modal-one').fadeIn("fast", function() {});
});

$('#modal-btn-two').on('click', function() {
    $('#modal-two').fadeIn("fast", function() {});
});

$('#cancel-btn').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('#cancel-btn-two').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$(".front").on('click', function() {
    $('.pg1').show();
    // $('.pg1').addClass("animated");
    // $('.pg1').addClass("flipInY");
    $('.front').hide();
});

$(".pg1").on('click', function() {
    $('.front').hide();
    $('.pg1').hide();
    $('.pg3').show();
});

$('html').on('mousemove',function(e){
$('#parallax-text').offset({
  left : '-'+e.pageX/5,
  top : 100+e.pageY/5
})
  $('body').css({
  backgroundPositionX : e.pageX/5+'px',
  backgroundPositionY :   '-'+e.pageY/5+'px',

})
})


// $(".pg1").unbind().on('click', function(){
// 	});

$(".pg2").on('click', function() {
    $('.pg3').show();
    $('.pg2').hide();
})

$(".pg3").on('click', function() {
    $('.pg3').hide();
    $('.pg4').show();
})

$(".pg4").on('click', function() {
    $('.pg4').hide();
    $('.pg5').show();
})

// $('.delete').on('click', function() {
//     $('#modal-two').fadeOut("fast", function() {});
// });

$('.no-color').on('click', function() {
    $('.color').show();
    $('.no-color').hide();
});

$('.color').on('click', function() {
    $('.color').hide();
    $('.no-color').show();
});










 /* 
See https://codepen.io/MarcelSchulz/full/lCvwq

The effect doens't appear as nice when viewing in split view :-)

Fully working version can also be found at (http://schulzmarcel.de/x/drafts/parallax).

*/

jQuery(document).ready(function(){
  $(window).scroll(function(e){
    parallaxScroll();
    });
     
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
        $('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
        $('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
    }
 
 }); 