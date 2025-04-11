let caixa = [];
const LIMITE_CAIXA = 10;


function embalarProdutos(produtos){

    if(caixa.length < LIMITE_CAIXA){
        caixa.push(produtos)
        console.log(`Produto adicionado a caixa - ${produtos}`)
    } else {
        console.log(`Caixa cheia. Enviando para selagem 🎁;`)
        caixa = [];
        caixa.push(produtos)
        console.log(`Produto adicionado a caixa - ${produtos}`)
    }

}

const ESTEIRA = 40;
for(let i = 1; i <= ESTEIRA; i++){
    embalarProdutos(`Produto ${i}`)
}