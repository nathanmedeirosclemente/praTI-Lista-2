const entrada = require('prompt-sync')();

function memoizar(funcaoOriginal) {
    const cache = [];

    const funcaoMemoizada = function (n) {
        if (cache[n] !== undefined) return cache[n];

        const resultado = funcaoOriginal(n);
        cache[n] = resultado;
        return resultado;
    };

    return funcaoMemoizada;
}

const fibonacci = memoizar(function (numero) {
    if (numero <= 1) return numero;
    return fibonacci(numero - 1) + fibonacci(numero - 2);
});

const textoDigitado = entrada("Digite um número para ver o Fibonacci: ");
const numeroInformado = parseInt(textoDigitado);

if (isNaN(numeroInformado) || numeroInformado < 0) {
    console.log("Digite um número inteiro positivo.");
} else {
    console.log(`Fibonacci(${numeroInformado}) = ${fibonacci(numeroInformado)}`);
}