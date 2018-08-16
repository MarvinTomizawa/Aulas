var filtro = document.querySelector(".filtro-pesquisa");

filtro.addEventListener("input",function(event){

	var pacientes = document.querySelectorAll(".paciente");
	

	for(var i=0 ; i< pacientes.length; i++){
		var paciente = pacientes[i];

		var nome = paciente.querySelector(".info-nome").textContent;

		var expressao = new RegExp(this.value,"i");

		if(!expressao.test(nome) && this.value.length != 0){
			paciente.classList.add("invisivel");
		}else{
			paciente.classList.remove("invisivel");
		}
	}
});