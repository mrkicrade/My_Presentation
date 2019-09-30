$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();

        let target = this.hash;
        let $target = $(target);

        //Scroll and show hash
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function(){
            window.location.hash = target;
        });
    });
});


