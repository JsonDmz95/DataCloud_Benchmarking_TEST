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

let value = 0;
let activateClic = false;
$(document).ready(function(){
    setTimeout(function() {
        move();
    }, 2500);

    taglineEntrance();

    let titlesTime;

    if ($(window).width() < 1550) {
        titlesTime = 2150;
    } else {
        titlesTime = 0;
    }

    setTimeout(function() {
        $('#animated-circle').css({
            'display': 'block'
        });
        new Vivus('animated-circle', {duration: 200});
    }, 5500 - titlesTime);

    for (var i = 1; i <= 41; i++) {
        document.querySelector(`#dot-${i}`).dataset.delay = `${5650 - titlesTime  + (i * 51)}`;
    }

    let a = 0;
    setTimeout(function() {
        $('.counter').each(function() {
            var $this = $(this), countTo= $this.attr('data-value');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {

                duration: 1500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum)+0.1 + '%');
                },
                complete: function() {
                    $this.text(this.countNum + '%');
                    //alert('finished');
                }

            });
        });
        a = 1;
    }, 6000);

    var animationToogler;
    var animationDestiny;

    if ($(window).width() >= 768){
        //Start Text Animation
        setTimeout(function() {
            animationToogler = $('#btn-executive');
            animationDestiny = $('#btn-executive').attr('data-destiny');

            $(animationToogler).addClass('active');
        }, 7000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
            $(animationDestiny).addClass('active');
        }, 9000);
        setTimeout(function() {
            $(animationDestiny).removeClass('active');
        }, 11000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
        }, 12000);
        setTimeout(function() {
            $(animationToogler).removeClass('active');
        }, 12500);


        setTimeout(function() {
            animationToogler = $('#btn-data');
            animationDestiny = $('#btn-data').attr('data-destiny');

            $(animationToogler).addClass('active');
        }, 13000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
            $(animationDestiny).addClass('active');
        }, 15000);
        setTimeout(function() {
            $(animationDestiny).removeClass('active');
        }, 17000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
        }, 18000);
        setTimeout(function() {
            $(animationToogler).removeClass('active');
        }, 18500);


        setTimeout(function() {
            animationToogler = $('#btn-reporting');
            animationDestiny = $('#btn-reporting').attr('data-destiny');

            $(animationToogler).addClass('active');
        }, 19000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
            $(animationDestiny).addClass('active');
        }, 21000);
        setTimeout(function() {
            $(animationDestiny).removeClass('active');
        }, 23000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
        }, 24000);
        setTimeout(function() {
            $(animationToogler).removeClass('active');
        }, 24500);


        setTimeout(function() {
            animationToogler = $('#btn-benchmarking');
            animationDestiny = $('#btn-benchmarking').attr('data-destiny');

            $(animationToogler).addClass('active');
        }, 25000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
            $(animationDestiny).addClass('active');
        }, 27000);
        setTimeout(function() {
            $(animationDestiny).removeClass('active');
        }, 29000);
        setTimeout(function() {
            $(animationDestiny).toggle('fast');
        }, 30000);
        setTimeout(function() {
            $(animationToogler).removeClass('active');
        }, 30500);
        //END OF Text Animation

        setTimeout(function() {
            activateClic = true;
        }, 31000);
    }

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

$('.tab-toggler').click(function(e) {
    if(activateClic){
        var destiny = $(this).attr('data-destiny');
        var auxDestiny;
        var auxToogler;


        if($(this).hasClass("active")){
            $(destiny).removeClass('active');
            $(this).removeClass('active');

            setTimeout(function() {
                $(destiny).toggle('fast');
            }, 3000);
        } else {

            auxDestiny = $('.tab-toggler.active').attr('data-destiny');
            auxToogler = $('.tab-toggler.active');

            $(auxToogler).removeClass('active');
            $(this).addClass('active');
            $(auxDestiny).removeClass('active');
            setTimeout(function() {
                $(auxDestiny).toggle('slow');
            }, 1500);

            setTimeout(function() {
                $(destiny).toggle('fast');
                $(destiny).addClass('active');

            }, 2000);


        }
    }


});


$('.explosion').each(function(){
    for (var i = 1; i <= 20; i++) {
        $(this).html($(this).html() +'<div class="explosion-dot"></div>');
    }
    $(this).html($(this).html() + '<div class="explosion-circle"></div>');


});
