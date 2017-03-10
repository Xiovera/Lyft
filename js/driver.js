function init (){
  solicitarEstimado();
  solicitarCarrera();
    
}

function solicitarEstimado()
{
  $.ajax({
    url:"https://clientes.geekadvice.pe/api/estimado",
    data:{"tipo":1}
  }).success(function(_data){
    // console.log(_data);
    update(_data);
  });
}

function solicitarCarrera()
{
  $.ajax({
    url:"https://clientes.geekadvice.pe/api/carrera",
    data:{"tipo":2}
  }).success(function(_data){
    //console.log(_data);
    update2(_data);
  });
}


function update(_info)
{

  //alert(_info.destino);
  //alert(_info.estimado.min);
  $('#price').html('<h2 id="price">'+_info.estimado.moneda+_info.estimado.min+'</h2>');

}

function update2(_info){
  $('#image').attr("src",_info.conductor.url);
}
