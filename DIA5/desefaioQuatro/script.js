let valorProduto = 80000;
let numeroParcelas = 84;

let valorParcelas = valorProduto / numeroParcelas;

for(let i = 1; i <= numeroParcelas; i++){
    valorProduto -= valorParcelas;
    console.log(`Parcela ${i}: R$ ${valorParcelas.toFixed(2)}`)
    console.log(`Valor restante a ser pago: R$ ${valorProduto.toFixed(2)}`)
}