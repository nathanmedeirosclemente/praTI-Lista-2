function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

const pares = [
    ["nome", "Arya Stark"],
    ["casa", "Stark"],
    ["viva", true],
];

const obj = paresParaObjeto(pares);
console.log(obj);

const paresDeNovo = objetoParaPares(obj);
console.log(paresDeNovo);