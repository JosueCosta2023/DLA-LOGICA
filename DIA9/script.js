
// Seleciona a primeira item do elemento
function indexOfJosue(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i
        }
    }

    return -1
}

// Valida a existencia do elemento no array
function includesJosue(array, elemento) {
    for (let item of array) {
        if (item === elemento) {
            return true;
        }
    }

    return false;
}

// Seleciona o ultimo item do elemento
function lastIndexOfJosue(array, elemento){
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] === elemento){
            return i
        }
    } return -1
}

function sliceJosue(array, indexInicial = 0, indexFinal = array.length){
    let pedaco = [];

    if(indexInicial < 0){
        indexInicial = array.length + indexInicial
    }

    if(indexFinal < 0){
        indexFinal = array.length + indexFinal
    }

    for(let i = indexInicial; i < indexFinal && array.length; i++){
        pedaco.push(array[i])
    }

    return pedaco
}

const redesSociais = [
    "Orkut",
    "Instagram",
    "Facebook",
    "Msn",
    "Bate Papo Uol",
    "Tiktok",
]

let msgUm = includesJosue(redesSociais, "Msn")
let msgDois = indexOfJosue(redesSociais, "Msn")
let msgTres = lastIndexOfJosue(redesSociais, "TitTok")
let tresMais = sliceJosue(redesSociais,0, 3 )

console.log(`Validação da função includesjosue: ${msgUm}`)
console.log(`Validação da função indexOfJosue: ${msgDois}`)
console.log(`Validação da função lastIndexOfJosue: ${msgTres}`)

for(let i = 0; i < tresMais.length; i++){
    console.log(`Validação da função sliceJosue: ${tresMais[i]}`)
}