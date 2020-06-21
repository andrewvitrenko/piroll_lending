$(window).ready(function () {
    let banner = $('.banner');
    let button__container = $('.button__container');
    let video__container = $('.video__container');

    video__container.css('height', video__container.outerWidth() / 1170 * 571)

    if ($(window).width() >= 768) {
        button__container.css('height', button__container.outerWidth() / 1366 * 113)
    }
    else {
        button__container.css('height', button__container.outerWidth() / 320 * 40)
    }

    if ($(window).width() >= 399) {
        banner.css('height', banner.outerWidth() / 1366 * 670)
    }
    else {
        banner.css('height', banner.outerWidth() / 320 * 200)
    }

    headerHandler($(window).scrollTop())

    $(window).resize(function () {        
        video__container.css('height', video__container.outerWidth() / 1170 * 571)

        if ($(window).width() >= 768) {
            button__container.css('height', button__container.outerWidth() / 1366 * 113)
        }
        else {
            button__container.css('height', button__container.outerWidth() / 320 * 40)
        }

        if ($(window).width() >= 399) {
            banner.css('height', banner.outerWidth() / 1366 * 670)
        }
        else {
            banner.css('height', banner.outerWidth() / 320 * 200)
        }
    })
})


//styles in header

$(window).scroll(function() {
    let st = $(window).scrollTop();
    headerHandler(st)
    navHandler(st)
})

function headerHandler(scrollTop) {
    let bannerHeight = $('.banner').outerHeight();
    let opacity = scrollTop / bannerHeight

    if (scrollTop <= bannerHeight) {
        let bgcolor = `rgba(255, 255, 255, ${opacity})`
        $('header').css('background', bgcolor)
    }
    else if (scrollTop > bannerHeight) {
        $('header').css('background', 'white')
    }
    
}

function navHandler(scrollTop) {
    let aboutTop = $('#about').offset().top;
    let worksTop = $('#works').offset().top;
    let processTop = $('#work_process').offset().top;
    let servicesTop = $('#services').offset().top;
    let testimonalsTop = $('#testimonals').offset().top;
    let contactTop = $('#contact').offset().top;
    let footerTop = $('footer').offset().top;

    if (scrollTop <= aboutTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(1)').css('color', '#10c9c3')
    }
    else if (scrollTop <= worksTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(2)').css('color', '#10c9c3')
    }
    else if (scrollTop <= processTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(3)').css('color', '#10c9c3')
    }
    else if (scrollTop <= servicesTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(4)').css('color', '#10c9c3')
    }
    else if (scrollTop <= testimonalsTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(5)').css('color', '#10c9c3')
    }
    else if (scrollTop <= contactTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(6)').css('color', '#10c9c3')
    }
    else if (scrollTop <= footerTop) {
        $('.nav__item').css('color', '#191919')
        $('.nav__item:nth-child(7)').css('color', '#10c9c3')
    }
}


//menu

$('.burger').click(function() {
    $(this).toggleClass('active')
    $('.nav').toggleClass('visible')
    $('html, body').toggleClass('locked')

    if ($('.nav').hasClass('visible')) {
        $('.nav').css('padding-top', $('header').outerHeight())
        $('.nav').css('height', '');

        $('.burger.active').css('height', '23px')
        $('.burger.active').css('width', '23px')
    }
    else {
        $('.nav').css('padding-top', '0')
        $('.nav').css('height', '0')

        $('.burger').css('height', '')
        $('.burger').css('width', '')
    }
})

$('.nav__link').click(function() {
    $('.nav').removeClass('visible')
    $('.burger').removeClass('active')
    $('html, body').removeClass('locked')
})