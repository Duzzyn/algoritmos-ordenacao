function troca(lista, analise) { // refatoração ins. Sort
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise] = itemAnterior; // atualiza os valores
    lista[analise - 1] = itemAnalise; // atualiza os valores
}

module.exports = troca;