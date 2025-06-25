function ehDataValida(dia, mes, ano) {
    // Verificando se o mês é válido (1-12)
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Verificando se o dia é válido (1-31)
    if (dia < 1 || dia > 31) {
        return false;
    }

    // Dias em cada mês
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verificando se é ano bissexto
    function ehAnoBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }

    // Ajustando fevereiro para ano bissexto
    if (ehAnoBissexto(ano)) {
        diasPorMes[1] = 29;
    }

    // Verificando se o dia é válido para o mês dado
    return dia <= diasPorMes[mes - 1];
}

// Exemplos
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não é ano bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(15, 7, 2023)); // true