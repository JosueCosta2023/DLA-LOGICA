// Decks

const itens = []

// Inserindo ao inicio
function inserirInicio(item) {
    itens.unshift(item)
}

// Inserir no final
function inserirFim(item) {
    itens.push(item)
}

// Remove no inicio do deck
function removerInicio() {
    return itens.shift();
}

// Remove no final do deck
function removerFim() {
    return itens.pop();
}

// Obter primeiro
function obterPrimeiro() {
    return itens[0]
}

// Obter o ultimo elemento
function ultimo() {
    return itens.pop();
}

// Verificar se esta vazio
function estaVazio() {
    return itens.length === 0;
}

// Obter itens
function obterItens() {
    // Retorna uma copia do array
    return itens.slice()
}

inserirInicio("Hilux")
inserirInicio("Mercebez Bens")
inserirFim("Golf")
inserirFim("Meriva")

console.table(obterItens())
console.log(estaVazio())

removerInicio()
removerFim()

console.table(obterItens())

console.log(`Primeiro: ${obterPrimeiro()}`)
console.log(`Ultimo: ${ultimo()}`)
