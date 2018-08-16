alert("Mensagem");
-Cria um textbox na pagina.

console.log("Mensagem");
-Mostra uma informação no console da pagina.

document
-Contem o arquivo html da pagina.

document.textContent;
-Retorna o conteudo sem sua tag.

document.querySelector("Tag"), document.querySelector("#id") ou document.querySelector(".Classe")
-Busca um elemento da pagina, este pode ser uma tag, um id ou uma classe CSS, mas retorna apenas um elemento.

document.querySelectorAll("Tag"), document.querySelectorAll("#id") ou document.querySelectorAll(".Classe")
-Funcional igual o querySelector mas retorna mais de um elemento em um array.

variavel.toFixed(2);
-Diminui o tamanho de casas decimais.

variavel.style;
-Da acesso a atributos do css.

variavel.classList;
-Permite realizar operações com a classe do elemento, adicionar remover etc..


function funcao(event){
	event.preventDefault();
	-Previne o metodo padrão da função.
}
-Cria funções

variavel.addEventListener("Evento",Função chamada); ou variavel.onEvento(Função chamada);
-Adiciona um evento para um elemento.
//Ex: variavel.addEventListener("click",function()) ou variavel.onClick(function());

variavel.value;
-retorna o valor da variavel de um formulario, este estando em numeral. 

document.createElemento("Tag");
-Cria um elemento html

variavel.appendChild(variavel);
-Adiciona um elemento como seu filho

var objeto ={
	propriedade:valor,
	propriedade2:valor2
}
-Cria um objeto, elemento em javascript

formulario.reset()
-Limpa os campos de um formulario.

elemento.innerHTML;
-Controla a HTML de um elemento;

array.forEach(function(elemento){});
-Faz o laço passar por cada elemento do array, este sendo mostrado dentro da função.

setTimeout(function(){
	funções
}, tempo);
-Delay em javascript.

variavel = new RegExp(palavra testada,"i");
-Cria uma expressão regular para melhorar as buscas.

variavel.test(nome);
-Faz parte da expressão regular e retorna verdadeiro caso possua a expressão dentro de seu código.

variavel = new XMLHttpRequest();
-Cria um novo objeto responsavel por fazer requisições http.

variavelXMLHttpRequest.open("Tipo de requisição","URL");
-Configura para a variavel realizar uma requisição(Post, Get, Put, Delete) no URL especificado.  

variavelXMLHttpRequest.send();
-Envia a requisição configurada.

variavelXMLHttpRequest.responseText;
-Possui o texto da resposta de uma requisição.

typeOf(elemento);
-Retorna o tipo do elemento.

JSON.parse(texto);
-Le o texto json e converte em objeto javascript.

variavelXMLHttpRequest.status;
-Retorna o codigo do protocolo (200 OK, 404 Não foi encontrado, etc...)
//------------------------------------------------------------------------------------------------
json = Javascript Object Notation.

