$(function() {

    $('.p-menu__button, .p-button__close').click(function(){
        $('.p-button__close, .l-contents__right').toggleClass('is-open');
    });

    let timer = 0;
    let currentWidth = window.innerWidth;
        $(window).resize(function(){
            if (currentWidth == window.innerWidth) {
                return;
            }
            if (timer > 0) {
                clearTimeout(timer);
            }

            timer = setTimeout(function () {
                location.reload();
        }, 10);		
    });
});