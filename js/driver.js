function carreraLyft (){
  var costoPorKM = $('#costoPorKM').val;
  var cantidadKM = $('#cantidadKM').val;

    this.costoPorKM = costoPorKM;
    this.cantidadKM = cantidadKM;  
    this.costoFinal = function costoFinal()
    {
    var precio = ( this.costoPorKM * this.cantidadKM).toFixed(2);
      return precio;      
    }
}

function calcularCosto(costoKM, cantidadKM) {
    var salida=document.getElementById("salida");
    var obj = new carreraUber(costoKM, cantidadKM);
    salida.innerHTML="El costo de la carrera es "+ obj.costoFinal()+".";
}

$('#