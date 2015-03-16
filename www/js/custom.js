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
    lat: 1.294804,
    lng: 103.859332,
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


/* Solutions */

$('.solutions-item').waypoint(function (down) {
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

var populateNews = function (data, settings) {
  var count = data.category.post_count;
  var newsItems = [];
  if (count > 3) count = 3;
  for (var i = 0; i < count; i++){
    var ppp = data.posts[i];
    var newsItem = $('<div>').addClass("col-md-12");
    newsItem.append($('<h3>').text(" " + ppp.title_plain).prepend($('<i>').addClass("icon-puzzle-piece")));
    newsItem.append($('<p>').html(ppp.excerpt));
    var subItem = $('<div>').addClass("sub-item");
    var contentAfterExcerpt = ppp.content.substr(ppp.excerpt.length);
    newsItems.push(newsItem.html());
  }
  $('#news > .container > .news-content > .row').html(newsItems);

};

var populateBlogs = function (data, settings) {
  var count = data.category.post_count;
  var blogsItems = [];
  if (count > 3) count = 3;
  for (var i = 0; i < count; i++){
    var ppp = data.posts[i];
    var blogsItem = $('<div>').addClass("col-md-12");
    blogsItem.append($('<h3>').text(ppp.title_plain).prepend($('<i>').addClass("icon-book")));
    blogsItem.append($('<p>').html(ppp.excerpt));
    var subItem = $('<div>').addClass("sub-item");
    var contentAfterExcerpt = ppp.content.substr(ppp.excerpt.length);
    blogsItems.push(blogsItem.html());
  }
  $('#blogs > .container > .blogs-content > .row').html(blogsItems);

};


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
  $('.navbar-nav a:not([data-toggle])').on('click', function () {
    $('.collapse').collapse('hide');
  });
  $('[data-app-id]').on('click', function () {
    var appDetailModal = $("#appDetailModal");
    appDetailModal.modal('show');
    $(appDetailModal.find('h4')).text("App " + $(this).data('app-id'));
  });

  var sgappNewsUrl = "http://sgappmarket.com/?json=get_category_posts&id=11";
  var sgappBlogsUrl = "http://sgappmarket.com/?json=get_category_posts&id=12&count=5&page=1";
  var settings = {1: "A"};

  //populate 3 latest news
  $.getJSON(sgappNewsUrl).done(function (data) {
    populateNews.apply(null, [data, settings])
  });

  //populate 5 latest blogs
  $.getJSON(sgappBlogsUrl).done(function (data) {
    populateBlogs.apply(null, [data, settings])
  });


});

				
				