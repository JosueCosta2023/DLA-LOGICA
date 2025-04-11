let deck = [];

function adicionar(carta){
    deck.push(carta)
    console.log("Carta adicionada ao deck: " + carta);
}

function jogar(){
    if(deck === 0){
        console.log("O deck esta vazio.")
        return null;
    }

    const cartaJogada = deck.pop()
    console.log(`Carta ${cartaJogada} jogada.`)
    return cartaJogada
}

adicionar("Dama de Paus")
adicionar("As de espadas")
adicionar("Rei Copas")

jogar()

