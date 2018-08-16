var tabelaPacientes = document.querySelector("table");

tabelaPacientes.addEventListener("dblclick",function(event){
	var alvoClicado = event.target;
	var paiAlvo = alvoClicado.parentNode;

	paiAlvo.classList.add("fadeOut");

	setTimeout(function(){
		paiAlvo.remove();
	}, 500);
	
});

// pacientes.forEach(function(paciente){
// 	paciente.addEventListener("dblclick",function(){
// 		this.remove();
// 	});
// });