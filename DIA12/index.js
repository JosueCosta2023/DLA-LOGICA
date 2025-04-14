let filaDriveTru = []

function entrarNaFila(placaDoCarro, pedido){
    filaDriveTru.push([placaDoCarro, pedido])
    console.log(`Carro ${placaDoCarro} entrou na fila com o pedido: ${pedido}`)
}


function atenderCarro(){
    if (filaDriveTru.length === 0) {
        console.log("Não há carros na fila.")
    } else {
        let carroAtendido = filaDriveTru.shift();
        console.log(`Carro ${carroAtendido[0]} com o pedido? ${carroAtendido[1]}`)
    }
}


function statusDaFila(){
    if(filaDriveTru.length > 0){
        console.log("Fila atual: " + filaDriveTru.map(carro => carro[0]).join(", "))
    } else {
        console.log("Não há carros na fila.")
    }
}

entrarNaFila("CDS6018", "Pizza")
entrarNaFila("ADS6568", "Hamburguer com fritas")
entrarNaFila("JUR6B88", "Capuccino Completo")

atenderCarro()

statusDaFila()

atenderCarro()
atenderCarro()

statusDaFila()