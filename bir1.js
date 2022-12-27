// https://manuel.pinto.dev



var originalBG = $(".grButton").css("background");

$('.grButton').mousemove(function(e) {
    x = e.pageX;
    bgPos = x/2 + "% " + "0%";
  
    $(this).css({
      'background-position': bgPos
    });
});

$('.grButton').mouseleave(function() {
  $(this).css({
    background: originalBG
  });
});
