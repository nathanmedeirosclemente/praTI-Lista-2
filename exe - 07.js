function ordenarNomesPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const produtos = [
    { nome: "Interceptor V8", preco: 120000 },
    { nome: "Mustang GT", preco: 85000 },
    { nome: "Camaro SS", preco: 90000 },
    { nome: "Dodge Charger", preco: 110000 },
    { nome: "Chevelle SS", preco: 95000 },
    { nome: "Pontiac GTO", preco: 100000 },
    { nome: "Ford Falcon", preco: 60000 },
    { nome: "Tesla Model S", preco: 82000 },
    { nome: "Fusca", preco: 8000 },
    { nome: "Chevette", preco: 10000 },
    { nome: "Opala", preco: 15000 },
];

const nomesOrdenados = ordenarNomesPorPreco(produtos);
console.log(nomesOrdenados);
