const prompt = require('prompt-sync')();

// Gerando número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.");

while (true) {
    const palpite = prompt("Digite seu palpite: ");
    const numero = parseInt(palpite);
    tentativas++;

    if (numero === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`);
        break;
    } else if (numero < numeroSecreto) {
        console.log("O número é mais alto!");
    } else {
        console.log("O número é mais baixo!");
    }
}