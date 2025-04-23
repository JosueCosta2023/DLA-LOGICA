// EXEMPLOS

const nomes = ["Josue", "Maria", "Eduarda", "Ewerton", "Dave"]

function buscaLinear(lista, valor){
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === valor){
            return i
        }
    }

    return -1
}


// Modelo de busca
function buscarLinearRecursiva(lista, valor, indice = 0){
    if(indice >= lista.length) return -1

    if(lista[indice] === valor) return indice

    return buscarLinearRecursiva(lista, valor, indice + 1)
}


// Objetivo de busca
function buscaBinaria(lista, valor){
    let inicio = 0;

    let fim = lista.length - 1;

    while(inicio <= fim){
        const meio = Math.floor((inicio + fim) / 2)

        if(lista[meio] === valor) return meio

        if(lista[meio] < valor){
            inicio = meio +1
        } else {
            fim = meio - 1
        }
    } 
    return -1
}

const listaDeNumeros = [10,20,30,50,80,40,6,9,81,52,3,100]
console.log(buscaLinear(nomes, "Dave"))
console.log("-".repeat(40))
console.log(buscaBinaria(listaDeNumeros, 6))