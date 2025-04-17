function adicionarMusica(musica) {
    return {
        data: musica,
        next: null
    }
}



let playList = {
    tocando: null,

        play: function(musica){
            const player = adicionarMusica(musica)

            if(!this.play){
                this.play = player
            } else {
                player.next = this.tocando;
                this.tocando = player
            }
        },

        screen: function(){
            let atual = this.tocando;
            let resultado = "";

            while(atual !== null){
                resultado += `[${atual.data}]`
                atual = atual.next
            }

            resultado += "null",

            console.log(resultado)
        }


}


let musica = {
    titulo:"Alejandro",
    artista: "Lady Gaga",
    duracao: "8",
    qtdReproduzida: "3",
}


playList.play(musica)

playList.screen()