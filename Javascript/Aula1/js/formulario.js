var botaoPrincipal = document.querySelector("#adicionar-paciente");

botaoPrincipal.addEventListener("click",function(event){
	event.preventDefault();

	var dadosFormulario = document.querySelector("#formulario-adicionar");

	var paciente = obtemDadosPaciente(dadosFormulario);
	
	adicionaPacienteNaTabela(paciente);
	
	dadosFormulario.reset();

	alert("Adicionado");
});

function obtemDadosPaciente(formulario){
	
	var paciente = {
		nome: formulario.nome.value,
		altura: formulario.altura.value,
		peso: formulario.peso.value,
		gordura: formulario.gordura.value,
		imc: calculoImc(formulario.peso.value,formulario.altura.value)
	}
	return paciente;
}

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTrPaciente(paciente);

	var formulario = document.querySelector("#tabela-pacientes");

	formulario.appendChild(pacienteTr);
}


function montaTrPaciente(paciente){
	var pacienteTr = document.createElement("tr");
	var nomeTd = montaTd(paciente.nome,"info-nome");
	var pesoTd = montaTd(paciente.peso,"info-peso");
	var alturaTd = montaTd(paciente.altura,"info-altura");
	var gorduraTd = montaTd(paciente.gordura,"info-gordura");
	var ImcTd ;

	var erro = document.querySelector("#mensagem-erro");
	erro.textContent = validaPaciente(paciente);

	if(erro.textContent.length > 0){
		return;
	}else{
		ImcTd = montaTd(calculoImc(paciente.peso,paciente.altura),"info-imc");
	}

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(ImcTd);

	pacienteTr.classList.add("paciente");

	return pacienteTr;
}

function montaTd(valor,classe){
	var td = document.createElement("td");
	td.textContent = valor;
	td.classList.add(classe);

	return td; 
}

function validaPaciente(paciente){
	if(!validaPeso(paciente.peso)){
		return "Peso invalido";
	}
	if(!validaAltura(paciente.altura)){
		return "Altura invalida";
	}
	return "";

}