function init () {
	

var codigoAleartorio = localStorage.getItem("codigo");
var numero= localStorage.getItem("numeroTelefono");
var nombre= localStorage.getItem("nombre");
var apellido= localStorage.getItem("apellido");
var correo= localStorage.getItem("correo");
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
	
}

var registrarCodigo= function(){
	if (codigoAleartorio !== null) {
		if(codigoAleartorio == codigoConfirmacion){
		}else{
			alert("Invalid code");
		}
	} else {
		alert("Generate your code");
	}
}


var validar= function(e){
	if(validar().length== 0){
		return true;
	}else{
		return false;
	}
}

var registrar= function(){
	nombre= localStorage.setItem("nombre",value);
	apellido= localStorage.setItem("apellido",value);
	correo= localStorage.setItem("correo",value);


}

var nombres= function(){
	var letra = /^[a-zA-Z]+$/;
	if{(nombre.length && apellidos.length)>=2 
		return true;
	}else{
		return false;		
	}
}

var email= function(){
	var regex= /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	if{email==null;
		return true;
	}else{
		return false;
	}
}

var generarNuevoCodigo= function(){
	codigoAleartorio= Math.floor(Math.random()*900)+100;
	localStorage.setItem("codigo", codigoAleartorio);
	alert("Your code is: LAB-"+ codigoAleartorio);
}