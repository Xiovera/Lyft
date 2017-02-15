function init () {
	
}
//para definir lat y lng

var miMap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.45738919999998, lng: -71.5315308},
    zoom: 14
  });
}
//para marcadores

var myLatLng = {lat: -16.45738919999998, lng: -71.5315308};

var pazPeru = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
    });