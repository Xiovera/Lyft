
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

var validarLongitud= function(){
	var longitud = $(this).val().length;
	if (longitud == 9) {
		$("#siguiente").attr("href", "codigo.html");
	} else {
		$("#siguiente").removeAttr("href");
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
var generarNuevoCodigo= function(){
	codigoAleartorio= Math.floor(Math.random()*900)+100;
	localStorage.setItem("codigo", codigoAleartorio);
	alert("Your code is: LAB-"+ codigoAleartorio);
}
	