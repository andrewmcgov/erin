console.log('Welcome to Erin\'s site!');

window.app = window.app || {};

app = (function() {
  // Log when app is running
  console.log('App is running');

  // Set up app selectors 
  this.selectors = {
    header: '.header',
    headerRow: '.header__row',
    mobileNav: '.mobileNav',
    mobileNavItems: '.mobile-nav__list a',
    navTrigger: '#mobileNavTrigger'
  }

  // Nav trigger click 
  $(selectors.navTrigger).click(function() {
    $(selectors.header).toggleClass('mobile-nav--open');
  });

  // Close mobile nav on link click
  $(selectors.mobileNavItems).each(function() {
    $(this).click(function() {
      $(selectors.header).removeClass('mobile-nav--open');
    });
  });



});

$(document).ready(function(){
  app();
}); 