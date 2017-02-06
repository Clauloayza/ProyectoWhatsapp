//---------------










//----------------- Parte Visual

var liListItem = null;

function onMensajeKey(evt){
	if(evt.keyCode == 13){
		var elInputMensaje = document.getElementById("mensajes");
		crearChats(elInputMensaje.value);
	    crearMensaje(elInputMensaje.value);
		elInputMensaje.value = "";
	}
	
}

function crearMensaje(_mensaje){
	var htmlMensajeIn = '<div class="w-message w-message-in">'+
		'<div class="w-message-text">'+
	  	'<h5 class="green-1">Maria Paula Rivarola</h5>'+
	  	'<p>Jajaja Sii finalmente se corto!!</p>'
	  					+'<div class="time">11:13</div>'
	  					+'</div>'
	  					+'</div>';
	
	
    var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">'+
	  					 '<div class="w-message-text">'
	  					 +'<p>'+_mensaje+'</p>'
	  					 +'<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>'
	  					 +'</div>'
	  					 +'</div>';
	
		
	var elConversacion = document.getElementById("conversacion");
	elConversacion.innerHTML += htmlMensajeOut;
	
	var chat = document.getElementById("chat");
	chat.scrollTop = chat.scrollHeight;
}

function crearListaChats(){
	
}

function crearChats(_mensaje){
	var elListaChats = document.getElementById("lista-chats");
	
	if(liListItem == null){
	
		liListItem = document.createElement('li');
	
	
	var htmlChatItem = 	'<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'
		  						+'<h4 class="w-contact-name">Laboratoria Perú</h4>'
		  						+'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'
		  					    +'</div>'
								+'<div class="time" id="hora">14:27</div>';
	
	liListItem.innerHTML = htmlChatItem;
	elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
		
	}
}

function actualizarHeaderChats(){
	
}