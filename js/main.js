var cargarPagina= function(){
	$("#telefono").keydown(validarNumeros);
	$("#telefono").keyup(validarLongitud);
	$("#siguiente").click(generarCodigo);
	$("#registrarCodigo").click(registrarCodigo);
	$(".codigo-r").keyup(focusI);
	$(".codigo-r").keypress(validar);
	$(".codigo-r").keydown(validarNumeros);
	$(".codigo-r").first().focus();
	$("#numero").text(numero);
	$("#registro").click(registrar);
	$("#nombres").keyup(mayuscula);
	$("#apellidos").keyup(mayuscula);
	$("#icono, .menu").click(menu);
	if(location.href.includes("mapa.html")){
		if (navigator.geolocation) { 
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	if(location.href.includes("mapa.html")){	
		$("#name-user").text(nombre[0].toUpperCase()+nombre.substring(1));
	}
	$(".absolute, #map").click(desaparecerMenu);
	$(".resend-code").click(generarNuevoCodigo);
	$("#buscar-lugar").click(buscar);
	if(location.href.includes("perfil.html")){
		$("#nombre-apellido").text(nombre[0].toUpperCase()+nombre.substring(1)+" "+ apellido[0].toUpperCase()+apellido.substring(1));
	}
	$("#fecha").text(inicio);
	$(".guardar").click(guardarDatos);
	if(domicilio != null){
		cambioInformación();
	}
}

$(document).ready(cargarPagina);
var codigoAleartorio = localStorage.getItem("codigo");
var numero= localStorage.getItem("numeroTelefono");
var nombre= localStorage.getItem("nombre");
var apellido= localStorage.getItem("apellido");
var correo= localStorage.getItem("correo");
var inicio= localStorage.getItem("fecha");
var mapa;

var validarNumeros= function(e){
	var codigo = e.keyCode;
	if (codigo == 8 || (codigo >= 48 && codigo <= 57)) {
		return true;
	} else {
		return false;
	}
}

var generarCodigo= function(){
	if (codigoAleartorio !== null) {
		localStorage.removeItem("codigo");
	}
	if ($("#telefono").val().length == 9){
		numero= $("#telefono").val();
		codigoAleartorio= Math.floor(Math.random()*900)+100;
		localStorage.setItem("codigo", codigoAleartorio);
		alert("Your code is: LAB-"+ codigoAleartorio);
		localStorage.setItem("numeroTelefono", numero);
	}
}

var registrarCodigo= function(){
	var codigoConfirmacion= $("#codigo1").val() + $("#codigo2").val() + $("#codigo3").val();
	if (codigoAleartorio !== null) {
		if(codigoAleartorio == codigoConfirmacion){
			$("#registrarCodigo").attr("href", "datos.html");
		}else{
			alert("Invalid code");
			$(".codigo").last().focus();
		}
	} else {
		alert("Generate your code");
	}
}

var focusI= function(e){
	var codigo = e.keyCode;
	if(codigo >= 48 && codigo <= 57){
		$(this).next().focus();
		return true;
	}else if(codigo == 8){
		$(this).prev().focus();
		return true;
	}else{
		return false;
	}
}

var validar= function(e){
	if($(this).val().length== 0){
		return true;
	}else{
		return false;
	}
}

var registrar= function(){
	nombre= localStorage.setItem("nombre", $("#nombres").val());
	apellido= localStorage.setItem("apellido", $("#apellidos").val());
	correo= localStorage.setItem("correo", $("#correo").val());

	if((nombres() && email()) && $("#check").is(":checked")){
		$("#registro").attr("href", "mapa.html");
	}

	var meses = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
	var f=new Date();
	var fecha= "JOINED "+ meses[f.getMonth()].toUpperCase() + " " + f.getFullYear();
	inicio= localStorage.setItem("fecha", fecha);
}

var nombres= function(){
	var letra = /^[a-zA-Z]+$/;
	if(($("#nombres, #apellidos").val().length >= 2 && $("#nombres, #apellidos").val().length <= 20) && letra.test($("#nombres, #apellidos").val().trim())){
		return true;
	}else{
		return false;		
	}
}

var email= function(){
	var regex= /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	if(regex.test($("#correo").val().trim())){
		return true;
	}else{
		return false;
	}
}

var menu= function(){
	$("#menu").animate({width:'toggle'},350);
	$(".absolute").show();
	$("#mapa").addClass("peque");
}

var desaparecerMenu= function(){
	$("#menu").animate({width:'toggle'},350);
	$(".absolute").hide();
	$("#mapa").removeClass("peque");
}

var generarNuevoCodigo= function(){
	codigoAleartorio= Math.floor(Math.random()*900)+100;
	localStorage.setItem("codigo", codigoAleartorio);
	alert("Your code is: LAB-"+ codigoAleartorio);
}

var buscar= function(e){
	e.preventDefault();
	GMaps.geocode({
		address: $('#buscar').val(),
		callback: function(results, status) {
			if (status == 'OK') {
				var latlng = results[0].geometry.location;
				mapa.setCenter(latlng.lat(), latlng.lng());
				mapa.addMarker({
				lat: latlng.lat(),
				lng: latlng.lng()
				});
			}
		}
	});
	$('#buscar').val("");
}

var guardarDatos= function(){
	var dom= $("#dom").val();
	var music= $("#musica").val();
	var usu= $("#usu").val();
	localStorage.setItem("domicilio",dom);
	localStorage.setItem("musica", music);
	localStorage.setItem("usuario",usu);

	cerrarEditar();

	$("#vivir").val("");

	cambioInformación();
}