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
        'transform': translate,
        'transition': 'none'
    });

    window.requestAnimationFrame(move);
}

$(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (-7 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (-3.5 * lMouseY) / 100;

});

function taglineEntrance() {
    $(".tagline").textillate({
        in: { effect: "fadeInUp" }
    });
}

$(document).ready(function(){
    taglineEntrance();

    setTimeout(function() {
        move();
    }, 2000);

    if($(window).width() < 1550){
        setTimeout(function() {
            if($(window).width() >= 768){
                $('#animated-circle').css({
                    'display': 'block'
                });
            }
            new Vivus('animated-circle', {duration: 200});
        }, 3500);

        for (var i = 1; i <= 41; i++) {
            document.querySelector(`#dot-${i}`).dataset.delay = `${3500 + (i * 51)}`;
        }
    } else {
        setTimeout(function() {
            $('#animated-circle').css({
                'display': 'block'
            });
            new Vivus('animated-circle', {duration: 200});
        }, 5500);

        for (var i = 1; i <= 41; i++) {
            document.querySelector(`#dot-${i}`).dataset.delay = `${5500 + (i * 51)}`;
        }
    }

    setTimeout(function() {
        move();
    }, 8000);

});

let act;
function addCircle(){

    if(window.innerWidth>=768 && act<768){
        $('#animated-circle').css({
            'display': 'block'
        });
    }

    act = window.innerWidth;
}

window.addEventListener('resize', function(event){
    addCircle();
});
