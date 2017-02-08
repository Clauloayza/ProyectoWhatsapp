//--------------- Parte Logica
/*var dataListaChats =[
	{nombre:"Chat 1", imgURL:'image/logocodeacademy.png',
	 ultimoMensaje:"",
	 horaUltimoMensaje:""}
];*/

function chat(_nombre, _imagen, _ultimoMensaje){
	this.nombre = _nombre;
	this.imgURL = _imagen;
	this.ultimoMensaje = _ultimoMensaje;
	this.horaUltimoMensaje = "";
	
	this.eliminarMensaje = function(){
		
	};
		
}

var dataListaChats = [
    
    new chat('Laboratoria Perú','image/logocodeacademy.png', "No se pique!!"),
	new chat("Maricela", 'https://scontent.fsst1-2.fna.fbcdn.net/v/t1.0-9/12507303_10208308713225859_6364601605553639551_n.jpg?oh=8c7c4232e0e665aea58910644aac2bc3&oe=59012761', "hola"),
	new chat("Fabi", 'https://scontent.fsst1-2.fna.fbcdn.net/v/t1.0-9/12974338_10207644691692894_5084372703488895898_n.jpg?oh=3673d202b9300a1982a9867d18bdc593&oe=5908769C', "holiii! Clau :3"),
	new chat("Gio", 'https://scontent.fsst1-2.fna.fbcdn.net/v/t1.0-9/14691114_10207565720916915_3021345534883774270_n.jpg?oh=5aaee18df7e87cd4195ddd00b8de4ef0&oe=5949C8EA', "Hay Señor!!"),
	new chat("Yovanna", 'https://secure.polyvoreimg.com/cgi/img-thing/size/l/tid/39757469.jpg', "hahaha !!"),
	new chat("Maday", 'http://4.bp.blogspot.com/-gZ33ZHfep6E/UY-3q_Id9OI/AAAAAAAAQc4/w4hOv7TAWJM/s1600/Margarita%2B8.JPG', "Chicas hay que seguir investigando :)" ),
	new chat("Giuli", 'http://s8.favim.com/orig/150709/dog-hawaii-puppy-starbucks-Favim.com-2928708.jpg', " :D")
];



//----------------- Parte Visual

var liListItem = null;

function init(){
	setInitChatList();
}

function setInitChatList(){
	
	var elListaChats = document.getElementById("lista-chats");
	
	for (var i in dataListaChats){
		
		var htmlChatItem = 	'<li>'+'<div class="avatar">'+'<img src="'+dataListaChats[i].imgURL+'" class="wh-44">'
		  						+'<h4 class="w-contact-name">'+dataListaChats[i].nombre+'</h4>'
		  						+'<p class="w-last-message" id="mensaje">'+dataListaChats[i].ultimoMensaje+'</p>'
		  					    +'</div>'
								+'<div class="time" id="hora">'+dataListaChats[i].horaUltimoMensaje+'</div>'+'</li>';
		
	dataListaChats[i].eliminarMensaje();
	elListaChats.innerHTML += htmlChatItem;
	}
	
	
	initChatList();
    
}

function initChatList(){
	
	var listaChats = document.getElementById('lista-chats');
		
	var arrListItems = listaChats.getElementsByTagName('li');
	
	
	for (var i=0; i < arrListItems.length; i++){
		
		/*arrListItems[i].onclick = function(){
			alert("click");
		};
		
		arrListItems[i].addEventListener('click', function(){
			alert("click listener");
		}); */
		
		arrListItems[i].addEventListener('click', onChatItemClick);
		
	}
	
}

function onChatItemClick(evt){
	//console.log(evt.currentTarget);
	
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
	
	actualizarHeaderChats(contactName, imgURL, "conectado");
    
    crearListaChats();
}



//--------------------BUSCADOR**********

	
search.addEventListener("keyup", function(e){
var choice = this.value;
   
var search = document.getElementById("search");
var contacto = document.getElementsByTagName("h4");
var forEach = Array.prototype.forEach;

	
  forEach.call(contacto, function(f){
      if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
          f.parentNode.parentNode.style.display = "none";   
      else
         f.parentNode.parentNode.style.display = "block";        
  });
}, 
false);
	



//-----------------------END BUSCADOR


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
	
    var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
    mensaje.innerHTML = _mensaje;
    
    var elChat = document.getElementById('chat'); 	
    elChat.innerHTML += htmlMensajeOut;
    elChat.scrollTop = elChat.scrollHeight;
    
	/*var elConversacion = document.getElementById("conversacion");
	elConversacion.innerHTML += htmlMensajeOut;
	
	var chat = document.getElementById("chat");
	chat.scrollTop = chat.scrollHeight;¨*/
}

function crearListaChats(){
	var listaChat = document.getElementById('chat');
    listaChat.innerHTML = "";
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
	initChatList();
	
}

function actualizarHeaderChats(_contactName, _imgURL, _estado){
	var chatHeader = document.getElementById("chat-header");
	
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
	
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML= _estado;
	
	chatHeader.getElementsByTagName('img')[0].src= _imgURL;
	
}