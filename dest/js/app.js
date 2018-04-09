$(function () {
  $('.navigation-search__wrap').slideUp();
  $('.js-search-nav').click(function (event) {
    $('.navigation-search__wrap').css('opacity', '1');
    $('.navigation-search__wrap').slideToggle();
  });

  $('.js-nav-bar').click(function (event) {
    $('.header-mobile').toggleClass('show');
    $('.body-wrapper').toggleClass('show');
  });
  $('.js-button-x').click(function (event) {
    $('.header-mobile').removeClass('show');
    $('.body-wrapper').removeClass('show');
  });
});
function initMap() {
  var uluru = { lat: 21.0168864, lng: 105.7855574 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    styles: [{ elementType: 'geometry', stylers: [{ color: '#222222' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#262626' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#2a2a2a' }] }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#2a2a2a' }]
    }, {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#ffffff' }]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#2a2a2a' }]
    }, {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ "visibility": "off" }]
    }, {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#595959' }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#2a2a2a' }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#2a2a2a' }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#696969' }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#2a2a2a' }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    }, {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    }, {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    }, {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    }, {
      featureType: 'transit.station',
      elementType: 'labels.icon',
      stylers: [{ "visibility": "off" }]
    }]
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}