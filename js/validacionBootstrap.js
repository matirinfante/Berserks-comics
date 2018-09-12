$(document).ready(
$('#form').bootstrapValidator({
 
	 message: 'Este valor no es valido',
 
	 feedbackIcons: {
 
		 valid: 'glyphicon glyphicon-ok',
 
		 invalid: 'glyphicon glyphicon-remove',
 
		 validating: 'glyphicon glyphicon-refresh'
 
	 },
 
	 fields: {
 
		 nombre: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'Ingrese nombre'
 
				 },
				 
 		regexp: {
 
					 regexp: /^[a-zA-Z]+$/,
 
					 message: 'El nombre solo debe contener caracteres'
 
				 }
			 }
 
		 },
 
		 email: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'Ingrese un email'
 
				 },
				 
				 emailAddress: {
					 message: 'Ingrese un E-Mail valido'
				},
				 regexp:{
					 regexp: /.com+/,
					 message: 'Falta .com'
				 }
			 }
 
		 },
		 
		 mensaje: {
			 validators: {
				 notEmpty: {
					 message: 'Ingrese un mensaje'
				 },
				 stringLength: {
 
					 min: 10,
 
					 message: 'El mensaje debe contener al menos 10 caracteres'
 
				 }
			 }
		 }
 
	 }
 
}));