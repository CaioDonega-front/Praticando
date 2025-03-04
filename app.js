let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}
exibirTextoNaTela ('h1','Hora do desafio');
exibirTextoNaTela ('p','Escolha um número entre 1 e 20');

function contagemChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}
function exibirAlerta(){
    alert('Eu amo JS');
}
function promptButton(){
    let cidade = prompt('Qual o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function somabutton(){
    let numero1 = Number(prompt('Digite um numero'));
    let numero2 = Number(prompt('Digite outro numero eeu irei somar'));
    let soma = numero1 + numero2;
    alert(`a soma dos numero digitados é ${soma}`);
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 20 + 1);
}