const supermercado = {
    caixa1: [],
    caixa2: [],
    caixa3: [],
    caixa4: [],
    caixa5: [],
    caixa6: [],
    caixa7: [],
    caixa8: [],
    caixa9: [],
    caixa10: []
}


function entrarNaFila(caixa, nome) {
    if (supermercado[caixa]) {

        supermercado[caixa].push(nome);

        console.log(`${nome} entrou na fila do pdv ${caixa}`)

    } else {
        console.log(`O ${caixa} não existe.`)
    }
}

function atenderCliente(caixa) {
    if (supermercado[caixa] && supermercado[caixa].length > 0) {

        let clienteAtendido = supermercado[caixa][0];

        for (let i = 1; i < supermercado[caixa].length; i++) {
            supermercado[caixa][i - 1] = supermercado[caixa][i]
        }

        supermercado[caixa].length -= 1;
        console.log(`${clienteAtendido} foi atendido no pdv ${caixa}`)


    } else if (supermercado[caixa]) {
        console.log(`A fila do ${caixa} esta vazia.`)
    } else {
        console.log(`O ${caixa} não existe.`)
    }
}

function mostrarFilas() {
    console.log("Estado das filas:")
    for (let caixa in supermercado) {

        if (supermercado[caixa].length > 0) {
            console.log(`${caixa}: ${supermercado[caixa].join(", ")}`)
        } else {
            console.log(`${caixa}: A fila está vazia.`)
        }
    }
}


entrarNaFila("caixa1", "João")
entrarNaFila("caixa4", "Ana")
entrarNaFila("caixa2", "Rubens")
entrarNaFila("caixa3", "Kiteria")
entrarNaFila("caixa1", "Alexy")
entrarNaFila("caixa5", "Hepaminontas")


mostrarFilas()


atenderCliente("caixa4")
atenderCliente("caixa2")
atenderCliente("caixa1")

mostrarFilas()

atenderCliente("caixa2")