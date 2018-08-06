document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    //siguiente 1 pagina de inicio que sale bienvenido
$('#sig1').click(function(){
		navigator.notification.beep(1);
		puntaje();


});
}


function puntaje(){
	$.getJSON('http://172.20.10.7/respuesta.php', function(data){
	var suma=0;
							
	for (var i = 0; i < data.length; i++) {
		if (data[i].respuestaC == $("input[name='a" + data[i].id + "']:checked").val()){
		suma=suma+1;

	}
	   }	navigator.notification.alert("Tu Puntaje es: " +suma,null,"Puntuación","ok");
	   abrir();

	  


	});

 }
function abrir(){
  window.location.href = "mostrar.php"; 
}



/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    //siguiente 1 pagina de inicio que sale bienvenido
$('#sig1').click(function(){
		navigator.notification.beep(1);
		//var nombre_usuario = document.getElementsByName('nombre')[0].value;
		//localStorage.setItem("nombre", nombre_usuario);
       // navigator.notification.alert("hola "+nombre_usuario,null,"bienvenido","ok");
});
}

  function validar(){
	   	var resp=0;
	   	if (document.getElementById("r1").checked) resp++;
	   	if(document.getElementById("rr3").checked) resp++;

	   	alert("Puntaje: " +resp);

	   }

  function validar2(){
  	$.getJSON('http://localhost/respuesta.php', function(data){
  		for (var i = 0; i < data.length; i++) {	




					}




     }
  }*/
		

