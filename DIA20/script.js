const arrayNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arrayNames = ["josue", "nair", "eleonor", "maria", "silvana", "sandra"];

function searchBinario(lista, valor) {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        const metade = Math.floor((inicio + fim) / 2)

        if (lista[metade] === valor) return metade

        if (lista[metade] < valor) {
            inicio = metade + 1;
        } else {
            fim = metade - 1
        }
    }

    return -1
}

function searchBinarioRecursivo(lista, valor, inicio = 0, fim = lista.length - 1) {

    let isNumerica = lista.every(item => typeof item === "number");
    let val = isNumerica ? valor : valor.toLowerCase()

    let novaLista = isNumerica ? lista.slice().sort((a, b) => a -b) : lista.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    
    if (inicio > fim) return -1;

    const metade = Math.floor((inicio + fim) / 2)

    if (novaLista[metade] === val) return metade

    if (novaLista[metade] < val) {
        return searchBinarioRecursivo(lista, valor, metade + 1, fim)
    }
   return searchBinarioRecursivo(lista, valor, inicio, metade - 1, fim)

}

console.log(searchBinario(arrayNumber, 30))
console.log(searchBinarioRecursivo(arrayNames, "josue"))
console.log(searchBinarioRecursivo(arrayNumber, 100))