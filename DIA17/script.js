const produtos = [
    ["Arroz", 25.99],
    ["Feijão", 12.50],
    ["Leite", 6.49],
    ["Oleo", 8.99],
    ["Pão", 7.31],
    ["Café", 15.30],
    ["Açucar", 4.89],
    ["Sal", 3.25],
    ["Macarrão", 5.79],
    ["Manteiga", 9.99]
]


function ordenateProduct(produto, indice){
    let n = produto.length;
    let indexParams = indice

    for(let i  = 0; i < n -1; i++){

        let minIndex = i;

        for(let j = i + 1; j < n; j++){


            if(produto[j][indexParams] < produto[minIndex][indexParams]){
                minIndex = j
            }

        }

        let temp = produto[i];
        produto[i] = produto[minIndex]

        produto[minIndex] = temp

    }

    return produto
}



console.log("Lista padrão vindo do db")
console.log(produtos)
console.log("-".repeat(40))
console.log("Ordenação de produtos em ordem alfabética:")
console.log("-".repeat(40))
console.table(ordenateProduct(produtos.slice(), 0))
console.log("-".repeat(40))
console.log("Ordenação de produtos por menor preço:")
console.log("-".repeat(40))
console.table(ordenateProduct(produtos.slice(), 1))
