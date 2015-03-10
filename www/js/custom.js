/* JS for responsive slider */

var api;
jQuery(document).ready(function () {
  api = jQuery('.banner').revolution(
    {
      delay: 5000,
      startheight: 600,
      startwidth: 1170,

      hideThumbs: 300,

      thumbWidth: 100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
      thumbHeight: 50,
      thumbAmount: 5,

      navigationType: "both",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
      navigationArrows: "verticalcentered",		//nexttobullets, verticalcentered, none
      navigationStyle: "round",				//round,square,navbar

      touchenabled: "on",						// Enable Swipe Function : on/off
      onHoverStop: "on",						// Stop Banner Timet at Hover on Slide on/off

      navOffsetHorizontal: 0,
      navOffsetVertical: 20,

      stopAtSlide: -1,
      stopAfterLoops: -1,

      shadow: 0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
      fullWidth: "on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
    });
});


/* JS for gmaps */
var map;
$(document).ready(function () {
  map = new GMaps({
    el: '#map',
    lat: -12.043333,
    lng: -77.028333,
    zoomControl: true,
    zoomControlOpt: {
      style: 'SMALL',
      position: 'TOP_LEFT'
    },
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    overviewMapControl: false
  });
});

/* prettyPhoto Gallery */

jQuery(".prettyphoto").prettyPhoto({
  overlay_gallery: false, social_tools: false
});


/* JS for Experience */

$(".knob").knob({
  'min': 0,
  'max': 100,
  'readOnly': true,
  'dynamicDraw': true,
  'thickness': 0.2,
});


/* JavaScript for Animation */

/* Hero */

$('.hero-h1').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInLeft');
}, {offset: '100%'});

$('.hero-p').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInRight');
}, {offset: '100%'});

/* Service Images */

$('.simg-one').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInDown');
}, {offset: '100%'});

$('.simg-two').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('bounceIn');
}, {offset: '70%'});

$('.simg-three').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInDown');
}, {offset: '70%'});

$('.simg-four').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInUp');
}, {offset: '70%'});

$('.simg-five').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInDown');
}, {offset: '70%'});

$('.simg-six').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('bounceIn');
}, {offset: '70%'});

$('.simg-seven').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('fadeInDown');
}, {offset: '70%'});

$('.simg-eight').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('tada');
}, {offset: '70%'});


/* Feature */

$('.feature-item').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('bounceInUp');
}, {offset: '70%'});

/* Portfolio */

$('.p-item').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('rotateIn');
}, {offset: '70%'});

/* About Us */

$('.team-member').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('flipInX');
}, {offset: '70%'});

/* Experience */

$('.e-item').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('bounceIn');
}, {offset: '70%'});

/* Pricing Table */

$('.ptable-content').waypoint(function (down) {
  $(this).addClass('animation');
  $(this).addClass('bounceIn');
}, {offset: '70%'});


/* Scroll to Top */


$(".totop").hide();

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.totop').slideDown();
    }
    else {
      $('.totop').slideUp();
    }
  });

  $('.totop a').click(function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 500);
  });

  $('li.dropdown > ul.dropdown-menu > li > a').on('click', function () {
    $('.collapse').collapse('hide');
  });
  $('[data-app-id]').on('click', function(){
    var appDetailModal = $("#appDetailModal");
    appDetailModal.modal('show');
    $(appDetailModal.find('h4')).text("App " + $(this).data('app-id'));
  })

});

				
				