

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('#mainNav').css('background', 'transparent');
    } else {
        $('#mainNav').css('background', 'rgba(0, 0, 0, 0.4)');
    }
});
