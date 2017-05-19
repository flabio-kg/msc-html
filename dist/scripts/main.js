'use strict';

$(document).ready(function () {

  $('.header__mnu ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    animateOut: 'fadeOut',
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true

  });
});