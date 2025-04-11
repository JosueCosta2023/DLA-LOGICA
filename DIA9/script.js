
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

const redesSociais = [
    "Orkut",
    "Instagram",
    "Facebook",
    "Msn",
    "Bate Papo Uol",
    "Tiktok",
]

includesJosue()