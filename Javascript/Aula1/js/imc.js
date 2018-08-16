function imcPacientes(){
	var listaPaciente = document.querySelectorAll(".paciente");

	for(var x = 0 ; x < listaPaciente.length; x++){
		
		var pacienteSelecionado = listaPaciente[x];

		var altura = pacienteSelecionado.querySelector(".info-altura").textContent;

		var peso = pacienteSelecionado.querySelector(".info-peso").textContent;

		var pesoValido = validaPeso(peso);
		var alturaValida = validaAltura(altura);

		if(pesoValido && alturaValida){
			var tdImc = pacienteSelecionado.querySelector(".info-imc");
			tdImc.textContent = calculoImc(peso,altura);
		}
		else{
			pacienteSelecionado.classList.add("paciente-invalido");	
		}
	}
}

function calculoImc(peso,altura){
	var Imc = peso / ( altura * altura );
	Imc= Imc.toFixed(2);	

	return Imc;
}

function validaPeso(peso){
	if(peso > 200 || peso <= 0){
		peso = "Peso invalido";
		return false;
	}else{
		return true;
	}
}

function validaAltura(altura){
	if(altura <= 0 || altura > 2.50){
		altura = "Altura invalida";
		return false;
	}else{
		return true;
	}
}

imcPacientes();