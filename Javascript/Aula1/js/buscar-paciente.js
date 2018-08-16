var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click",function(event){
	var xhr = new XMLHttpRequest();

	xhr.open("Get","https://api-pacientes.herokuapp.com/pacientes");//Configura requisição http para o url

	xhr.addEventListener("load", function(){//Ao receber uma resposta é ativada esta função
		if(xhr.status == 200){
			var resposta = xhr.responseText; //MOstra o conteudo em modo de texto
			console.log(resposta);//Mostra o conteudo da resposta 
			
			var pacientes = JSON.parse(resposta);
			console.log(pacientes);

			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});	
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});

	xhr.send();//Envia o protocolo configurado
})