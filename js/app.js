function init () {
	
}
//para definir lat y lng

var miMap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.45738919999998, lng: -71.5315308},
    zoom: 14
  });

//para marcadores

var myLatLng = {lat: -16.45738919999998, lng: -71.5315308};
var pazPeru = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'aqui estoy',
    icon: "img/person_3_30x40.png"
    });

var myLatLng2 = {lat: -16.46134919999998, lng: -71.5395308};
var cerca1 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'carro1',
    icon: "img/car_30x40.jpg"
    });

var myLatLng3 = {lat: -16.45538919999998, lng: -71.5455308};
var cerca2 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'carro2',
    icon: "img/car_30x40.jpg"
    });

var myLatLng4 = {lat: -16.45938919999998, lng: -71.5295308};
var cerca3 = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'carro3',
    icon: "img/car_30x40.jpg"
    });
}