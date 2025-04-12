let chamadas = []

function recebendoChamadas(numero) {
    chamadas.push(numero)
    console.log("Numero aguardando atendimento.", [...chamadas])
}

function emAtendimento(){
    setTimeout(() => {
        if(chamadas.length > 0){
            let atendimento = chamadas.shift()
            console.log("O numero em atendimento é: ", atendimento);
    
        } else {
            console.log("Não há atendimentos pendentes.")
        }
    }, 3000)
}

recebendoChamadas("65993408371")
recebendoChamadas("66992608191")
recebendoChamadas("72973445371")

emAtendimento()
emAtendimento()
emAtendimento()
emAtendimento()