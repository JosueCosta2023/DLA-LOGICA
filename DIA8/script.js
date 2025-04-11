let fila = []

function entrarNaFila(nome){
    fila.push(nome);
    console.log(`${nome} entrou na fila.`)
}

function atendercliente(){
    if(fila.length > 0){
        let clienteAtendido = fila[0]

        for(let i  = 1; i < fila.length; i++){
            fila[i -1] = fila[i]
        }

        fila.length = fila.length - 1;
        console.log(`${clienteAtendido} foi atendido, próximo da fila por favor.`)


    } else {
        console.log(`Não há clientes na fila pra serem atendidos.`)
    }
}

function mostrarFila(){
    if(fila.length > 0 ){   
        console.log("Clientes na fila: " + fila.join(", "));

    } else {
        console.log("A fila esta vazia.")
    }
}

entrarNaFila("Josue")
entrarNaFila("Douglas")
entrarNaFila("Kallel")
entrarNaFila("Paulo")


mostrarFila()

atendercliente()

mostrarFila()