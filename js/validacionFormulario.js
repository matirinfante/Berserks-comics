// JavaScript Document
		
	function validarFormulario(){
 
		var txtNombre = document.getElementById('nombre').value;
		var txtCorreo = document.getElementById('email').value;
		var txtMensaje = document.getElementById('mensaje').value;
 
		//Test campo obligatorio
		if(txtNombre === null || txtNombre.length === 0 || /^\s+$/.test(txtNombre)){
			alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
			return false;
		}
 
		//Test correo
		if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
			alert('ERROR: Debe escribir un correo válido');
			return false;
		}
 
		//Test mensaje
		if(txtMensaje === null || txtMensaje.length < 10 || /^\s+$/.test(txtNombre)){
			alert('ERROR: Debe escribir al menos 10 caracteres');
			return false;
		}
 
		return true;
	}
 