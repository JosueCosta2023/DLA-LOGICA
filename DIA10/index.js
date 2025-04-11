let pilhaDeProdutos = [];
const CAPACIDADE_MAXIMA  = 10;

function empilharProduto(produto){
    if(pilhaDeProdutos.length < CAPACIDADE_MAXIMA){
        pilhaDeProdutos.push(produto)
        console.log(`Produto ${produto} empilhado.`)
    } else {
        console.log("Caixa cheia. Enviando para selagem e despacho.");
        pilhaDeProdutos = [];
        pilhaDeProdutos.push(produto);
        console.log(`Produto ${produto} empilhado na nova caixa.`)
    }
}

const TOTAL_PRODUTOS_ESTEIRA = 40;
for(let i = 1; i <= TOTAL_PRODUTOS_ESTEIRA; i++){
    empilharProduto(`Produto ${i}`)
}

