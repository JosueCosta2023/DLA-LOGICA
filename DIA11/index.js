let pilhaAnterior = [];
let pilhaProxima = [];
let atual

function proximaMusica(){
    if(pilhaProxima.length > 0){
        pilhaAnterior.push(atual)
        atual = pilhaProxima.pop()
        displayScreen()
    } else {
        console.log("Não há musicas")
    }
}

function anteriorMusica(){
    if(pilhaAnterior.length > 0){
        // Aqui ocorre a alternação da navegação
        pilhaProxima.push(atual)
        atual = pilhaAnterior.pop()
        displayScreen()
    } else {
        console.log("Não há musicas anmteriores")
    }
}

function tocarMusica(novaMusica){
    if(novaMusica !== atual){
        pilhaAnterior.push(atual)
        atual = novaMusica
        pilhaProxima = []
        displayScreen()
    } else {
        console.log("Já estamos ouvindo.")
    }
}

function displayScreen(){
    console.log("-".repeat(40));
    console.log(`Tocando Agora: 🎧 ${atual}`)
    console.log(`Anterior: ${[...pilhaAnterior]}`)
    console.log(`Proxima: ${[...pilhaProxima]}`)
    console.log("-".repeat(40));
}

tocarMusica("Led Zeppelin - Stairway to Heaven")
tocarMusica("Queen - Bohemian Rhapsody")
tocarMusica("Lady Gaga - Bad Romance")

tocarMusica("Bruno Mars - Talking to the Moon")
anteriorMusica()
anteriorMusica()

proximaMusica()
proximaMusica()
displayScreen()