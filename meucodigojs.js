var a = 12.75;
var b = 3;
var c = a + b;
alert("Total da soma: "+ c);

var nome;
nome = prompt("Informe o seu nome:");
alert("Olá, " + nome);

var nota1 = 10;
var nota2 = 8;
var media = (nota1+nota2)/2;
if(media >= 7){
	alert("Sua média foi de " + media + " aluno APROVADO!");
}
else{
	alert("Sua média foi de " + media + " aluno REPROVADO!");
}

var sair = confirm("Confirmar ir para a página do Google?");
if(sair == 1){
	window.location = "https://www.google.com.br/";
}

var repete = 1;
while(repete <= 3){
	alert("Mensagem: " + repete);
	repete++;
}

var inicio = 2;
var fim = 10;
var todospares = "Números pares: ";
while(inicio <= fim){
	if(inicio%2 == 0){
		todospares = todospares + inicio + ", ";
	}
	inicio++;
}
alert(todospares);