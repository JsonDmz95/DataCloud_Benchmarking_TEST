var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function move() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px)';

  $('.phone').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(move);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (-7 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (-3.5 * lMouseY) / 100;

});

move();



function taglineEntrance() {
    $(".tagline").textillate({
      in: { effect: "fadeInUp" }
    });
  }

  $(document).ready(function(){
      taglineEntrance();
  });
