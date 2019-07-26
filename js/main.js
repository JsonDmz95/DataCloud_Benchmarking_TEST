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
//
// $('.explosion').each(function(){
//     for (var i = 1; i <= 20; i++) {
//         $(this).html($(this).html() +'<div class="dot-explosion"></div>');
//     }
//     $(this).html($(this).html() + '<div class="circle-explosion"></div>');
//
//
// });
$('.tab-toggler').click(function(e) {
    // var jump = $(this).attr('href');
    // var position = $(jump).offset();
    // $('body, html').stop().animate({
    //     scrollTop: position.top
    // }, 1000);
    // e.preventDefault();
     // event.preventDefault();
    var destiny = $(this).attr('data-destiny');
    var auxDestiny;
    var auxToogler;

    // $(this).addClass('active');-+-



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


        // $('.text-carousel-item.active').toggle('fast');
        $('.text-carousel-item.active');
        setTimeout(function() {
            $(auxDestiny).toggle('fast');
        }, 1000);

        setTimeout(function() {
            $(destiny).toggle('fast');
            $(destiny).addClass('active');

        }, 1500);




    }

});
