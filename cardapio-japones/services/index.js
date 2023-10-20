import cardapio from "../data/cardapio"

export function searchItemCardapio(inputTerm) {
    return cardapio.filter((item) => item.nome.toLowerCase().includes(inputTerm.toLowerCase()))
    
}

export function filterCategoria(categoria) {
    return cardapio.filter((produto) => produto.categoria.toLowerCase() === categoria.toLowerCase())
}

export function filterSugestoes() {
    return cardapio.filter((produto) => produto.pratoSugerido === true);
}