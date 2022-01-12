$(window).ready(function () {
  const banner = $('.banner');
  const button__container = $('.button__container');
  const video__container = $('.video__container');

  video__container.css('height', (video__container.outerWidth() / 1170) * 571);

  if ($(window).width() >= 768) {
    button__container.css(
      'height',
      (button__container.outerWidth() / 1366) * 113
    );
  } else {
    button__container.css(
      'height',
      (button__container.outerWidth() / 320) * 40
    );
  }

  if ($(window).width() >= 399) {
    banner.css('height', (banner.outerWidth() / 1366) * 670);
  } else {
    banner.css('height', (banner.outerWidth() / 320) * 200);
  }

  headerHandler($(window).scrollTop());
  navHandler($(window).scrollTop());

  $(window).resize(function () {
    video__container.css(
      'height',
      (video__container.outerWidth() / 1170) * 571
    );

    if ($(window).width() >= 768) {
      button__container.css(
        'height',
        (button__container.outerWidth() / 1366) * 113
      );
      $('.nav').removeClass('visible');
      $('.burger').removeClass('active');
      $('html, body').removeClass('locked');
      $('.nav').css('padding-top', '');
    } else {
      button__container.css(
        'height',
        (button__container.outerWidth() / 320) * 40
      );
    }

    if ($(window).width() >= 399) {
      banner.css('height', (banner.outerWidth() / 1366) * 670);
    } else {
      banner.css('height', (banner.outerWidth() / 320) * 200);
    }

    if ($(window).width() > 499) {
      $('.nav').css('height', '');
    } else {
      $('.nav').css('height', $('.banner').outerHeight());
    }
  });
});

//styles in header

$(window).scroll(function () {
  const st = $(window).scrollTop();
  headerHandler(st);
  navHandler(st);
});

function headerHandler(scrollTop) {
  const bannerHeight = $('.banner').outerHeight();
  const opacity = scrollTop / bannerHeight;

  if (scrollTop <= bannerHeight) {
    const bgcolor = `rgba(255, 255, 255, ${opacity})`;
    $('header').css('background', bgcolor);
  } else if (scrollTop > bannerHeight) {
    $('header').css('background', 'white');
  }
}

function navHandler(scrollTop) {
  const headerHeight = $('header').outerHeight();
  const aboutTop = $('#about').offset().top - headerHeight;
  const worksTop = $('#works').offset().top - headerHeight;
  const processTop = $('#work_process').offset().top - headerHeight;
  const servicesTop = $('#services').offset().top - headerHeight;
  const testimonalsTop = $('#testimonals').offset().top - headerHeight;
  const contactTop = $('#contact').offset().top - headerHeight;
  const footerTop = $('footer').offset().top - headerHeight;

  if (scrollTop <= aboutTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(1)').css('color', '#10c9c3');
  } else if (scrollTop <= worksTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(2)').css('color', '#10c9c3');
  } else if (scrollTop <= processTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(3)').css('color', '#10c9c3');
  } else if (scrollTop <= servicesTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(4)').css('color', '#10c9c3');
  } else if (scrollTop <= testimonalsTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(5)').css('color', '#10c9c3');
  } else if (scrollTop <= contactTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(6)').css('color', '#10c9c3');
  } else if (scrollTop <= footerTop) {
    $('.nav__item').css('color', '#191919');
    $('.nav__item:nth-child(7)').css('color', '#10c9c3');
  }
}

//menu

$('.burger').click(function () {
  $(this).toggleClass('active');
  $('.nav').toggleClass('visible');
  $('html, body').toggleClass('locked');

  if ($('.nav').hasClass('visible')) {
    $('.nav').css('padding-top', $('header').outerHeight());

    if ($(window).width() > 499) {
      $('.nav').css('height', '');
    } else {
      $('.nav').css('height', $('.banner').outerHeight());
    }
  } else {
    $('.nav').css('padding-top', '0');
    $('.nav').css('height', '0');
  }
});

$('.nav__link').click(function () {
  $('.nav').removeClass('visible');
  $('.burger').removeClass('active');
  $('html, body').removeClass('locked');
});
