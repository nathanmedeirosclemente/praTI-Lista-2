const vendas = [
    { cliente: "Jon Snow", total: 150 },
    { cliente: "Daenerys", total: 300 },
    { cliente: "Tyrion", total: 120 },
    { cliente: "Jon Snow", total: 200 },
    { cliente: "Daenerys", total: 250 },
    { cliente: "Arya", total: 80 },
];

const totaisPorCliente = vendas.reduce((montante, venda) => {
    const { cliente, total } = venda;
    montante[cliente] = (montante[cliente] || 0) + total;
    return montante;
}, {});

console.log(totaisPorCliente);