$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('menu-toggle--active');
    $('.navigation__list').toggleClass('navigation__list--active');
    $('.navigation').toggleClass('navigation--border-none');
  });
});

$(function() {
  const navLinks = $('[data-link]');
  const navItems = $('[data-item]');

  navItems.on('click', function() {
    navItems.removeClass('navigation__item--active');
    $(this).addClass('navigation__item--active');
  });

  navLinks.on('click', function(e) {
    navLinks.removeClass('navigation__link--active');
    $(this).addClass('navigation__link--active');
  });
});
