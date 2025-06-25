let string = "Olá Olá, Mundo Mundo";
let palavras = string.split(" ");
let palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    // Removendo a pontuação e converter para minúsculo
    let palavraLimpa = palavras[i].replace(/[.,!?;:]/g, '').toLowerCase();

    // Pular palavras vazias
    if (palavraLimpa === '') continue;

    let jaExiste = false;

    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavraLimpa === palavrasUnicas[j]) {
            jaExiste = true;
            break;
        }
    }

    if (!jaExiste) {
        palavrasUnicas.push(palavraLimpa);
    }
}

console.log(palavrasUnicas);