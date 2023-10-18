import cardapio from "../dados/cardapio"

export function searchItemCardapio(inputTerm) {
    const itemCardapio = cardapio.filter((item) =>
        item.nome.toLowerCase().includes(inputTerm.toLowerCase())
        ||
        item.descricao.toLowerCase().includes(inputTerm.toLowerCase())
        ||
        item.categoria.toLowerCase().includes(inputTerm.toLowerCase()))

    return itemCardapio
}

export function filterCategoria(categoria) {
    return cardapio.filter((produto) => produto.categoria.toLowerCase() === categoria.toLowerCase())
}

export function filterSugestoes() {
    return cardapio.filter((produto) => produto.pratoSugerido === true);
}