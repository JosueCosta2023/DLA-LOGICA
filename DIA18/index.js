function criarMusica(nome, artista, tempo){
    return{ 
        nome: nome,
        artista: artista,
        reproducoes: 0,
        tempo: tempo
    }
}


const playList = {
    musicas : [],

    adicionarMusica: function(nome, artista, tempo){
        const novaMusica = criarMusica(nome, artista, tempo);

        for(let i = this.musicas.length; i > 0; i--){
            this.musicas[i] = this.musicas[i - 1];
        }

        this.musicas[0] = novaMusica;
        console.log(`🎶 Musica ${nome} adicionada a Playlist.`)
    },
    removerMusica: function(nome){
        let index = 1;

        for(let i = 0; i < this.musicas.length; i++){
            if(this.musicas[i].nome === nome){
                index = i;
                break;
            }
        }

        if(index === -1){
            console.log(`Musica ${nome} não encontrada.`)
            return
        }

        for(let i = index; i < this.musicas.length - 1; i++){
            this.musicas[i] - this.musicas[i + 1]
        }

        this.musicas.length--;
        console.log(`❌ Musica ${nome} removida da playList`)
    },
    moverMusica: function(nome, novaPosicao){
        let index = -1;

        for(let i = 0; i < this.musicas.length; i++){
            if(this.musicas[i].nome === nome){
                index = i;
                break
            }
        }

        if(index === -1){
            console.log(`Musica ${nome} não contrada.`)
            return
        }

        let musica =  this.musicas[index]

        for(let i = index; i < this.musicas.length - 1; i++){
            this.musicas[i] = this.musicas[i + 1];
        }

        this.musicas.length--;


        for(let i = this.musicas.length; i > novaPosicao; i--){
            this.musicas[i] = this.musicas[i - 1];
        }

        this.musicas[novaPosicao] = musica

        console.log(`Musica ${nome} movida para posição ${novaPosicao + 1}`)
    },
    tocarPlayList: function(){
        if(this.musicas.length === 0){
            console.log("A playLista esta vazia.")
            return
        } else {    
            console.log("Tocando a playlist")
            for(let i = 0; i < this.musicas.length; i++){
                this.musicas[i].reproducoes++
                console.log(`Tocando: ${this.musicas[i].nome} - ${this.musicas[i].artista} : (${this.musicas[i].tempo})`)
            }
        }
    },
    tocarMusica: function(nome){
        for(let i = 0; i < this.musicas.length; i++){
            if(this.musicas[i].nome === nome){
                this.musicas[i].reproducoes++;
                console.log(`Tocando ${this.musicas[i].nome} - ${this.musicas[i].artista} (${this.musicas[i].tempo})`)
                return
            }       
        }

        console.log(`Musica ${nome} nã encontrada`)
    },
    mostrarPlayList: function(){

        if(this.musicas.length === 0){
            console.log(`A playlist esta vazia.`)
        } else {
            console.log(`Playlist atual`)
            for(let i = 0; i < this.musicas.length; i++){
                console.log(`${i + 1}. ${this.musicas[i].nome} - ${this.musicas[i].artista} | Reproduções: ${this.musicas[i].reproducoes}`)
            }
        }
    },
    mostrarPlayListEmOrdemAlfabetica(){
        let n = this.musicas.length;
        let trocado;

        do{
            trocado = false;

            for(let i = 0; i < n - 1; i++){

                if(this.musicas[i].nome > this.musicas[i + 1].nome){

                    let temporario = this.musicas[i]

                    this.musicas[i] = this.musicas[i + 1]
                    this.musicas[i + 1]  = temporario;
                    trocado = true

                }

            }

        } while(trocado)

        console.log("Playlist ordenada por nome:")
        for(let i = 0; i < this.musicas.length; i++){
            console.log(`${i + 1}. ${this.musicas[i].nome} - ${this.musicas[i].artista} | Reproduções: ${this.musicas[i].reproducoes}`)
        }
        
    },

    mostrarPlayListOrdenadaPorNumeroDeReproducoes(){
        let n = this.musicas.length;

        for(let i = 0; i < n - 1; i++){

            let maxIndex = i;

            for(let j = i + 1; j < n; j++){
                
                if(this.musicas[j].reproducoes > this.musicas[maxIndex].reproducoes){
                    maxIndex = j
                }
            }

            let temporario = this.musicas[i]

            this.musicas[i] = this.musicas[maxIndex]
            this.musicas[maxIndex] = temporario

        }

        console.log("Playlist ordenada por numero de reproduções")
        for(let i = 0; i < this.musicas.length; i++){
            console.log(`${i + 1}. ${this.musicas[i].nome} - ${this.musicas[i].artista} | Reproduções: ${this.musicas[i].reproducoes}`)
        }

       
    }
}

// 🎧 Testando a playlist
playList.adicionarMusica("Bohemian Rhapsody", "Queen", "5:55");
playList.adicionarMusica("Shape of You", "Ed Sheeran", "3:53");
playList.adicionarMusica("Blinding Lights", "The Weeknd", "3:22");
playList.adicionarMusica("Abracadabra", "Lady Gaga", "6:42");



for(let i = 1; i <= 20; i++){
    playList.tocarMusica("Abracadabra")
}
for(let i = 1; i <= 5; i++){
    playList.tocarMusica("Shape of You")
}
for(let i = 1; i <= 30; i++){
    playList.tocarMusica("Blinding Lights")
}
for(let i = 1; i <= 13; i++){
    playList.tocarMusica("Bohemian Rhapsody")
}


playList.mostrarPlayListEmOrdemAlfabetica()
console.log("-".repeat(60))
playList.mostrarPlayListOrdenadaPorNumeroDeReproducoes()

