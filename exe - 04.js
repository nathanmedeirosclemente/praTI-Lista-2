const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n < 0) throw new Error("n deve ser >= 0");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

try {
    const input = prompt("Digite um número inteiro positivo: ");
    const numero = parseInt(input);
    const resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);
} catch (e) {
    console.error("Erro:", e.message);
}