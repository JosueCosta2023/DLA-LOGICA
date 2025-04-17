
// Cria a lista encadeada
function criarNo(elemento){
    return{
        data: elemento,
        next: null
    }
}


// Criando a esturtura basica da lista encadeada
let listaEncadeada = {
    head: null,

    // Incluir um nó
    insertFirst: function(elemento){
        const novoNo = criarNo(elemento)

        if(!this.head){
            this.head = novoNo
        } else {
            novoNo.next = this.head;
            this.head = novoNo
        }

        return elemento
    },

    // Incluir um no ao final da lista
    insertLast: function(elemento){
        const novoNo = criarNo(elemento)

        if(!this.head){
            this.head = novoNo
        } else {
            let atual = this.head

            while(atual.next !== null){
                // Enquanto o proximo nó não for vazio o loop sera executado
                atual = atual.next
            }
            
            atual.next = novoNo
        }

        return elemento
    },

    // Incluir um no aleatorio
    insertAt: function(elemento, posicao){
        const novoNo = criarNo(elemento)

        if(posicao === 0 || this.head === null){
            novoNo.next = this.head;
            this.head = novoNo
            return elemento
        } 

        let atual = this.head;
        let anterior = null;
        let indice = 0;

        while(atual !== null && indice < posicao){
            // A anterior recebe a atual
            anterior = atual;

            // A atual recebe o proximo
            atual = atual.next;

            // indice aumenta +1
            indice++
        }

        // Se a lista acabar antes da posição desejada então o console sera exibido.
        if(indice !== posicao){
            console.log("Posição invalida (maior que o tamanho da lista)")
            return null
        }


        anterior.next = novoNo;
        novoNo.next = atual;

        return elemento

    },

    // Deletar um no aleatorio
    deleteAt: function(posicao){
        if(posicao < 0 || this.head === null){
            console.log("Posição invalida.")
            return null
        }

        let atual = this.head;
        let anterior = null;
        let indice = 0;


        if(posicao === 0){
            // A inserção do next remove pq o next e sempre nulo? ou seja ele torna o atual nulo também e isso faz a remoção do head?
            this.head = atual.next;
            return atual.data;
        }

        while(atual !== null && indice < posicao){
            anterior = atual;
            atual = atual.next;
            indice++
        }


        if(atual === null){
            console.log("Posição não encontrada")
            return null
        }

        anterior.next = atual.next;
        return atual.data
    },

    // Encontrar um nó de acordo com a posição
    searchAt: function(posicao){
        if(posicao < 0) {
            console.log("Posição invalida")
            return null
        }

        let atual = this.head;
        let indice = 0

        while(atual !== null){
            // Quando o index for igual ao buscado
            if(indice === posicao){
                return atual.data
            }

            atual = atual.next;
            indice++
        }

        console.log("Posição fora dos limites da lista")
        return null
    },

    // Percorrer todos os nós
    traversal: function(){
        let atual = this.head;
        let resultado = "";

        while(atual !== null){
            resultado += `[${atual.data}]`
            atual = atual.next;
        }

        resultado += "null";
        console.log(resultado)
    },

    // Retorna a posição de acordo com o elemento
    indexOf: function(elemento){
        let atual = this.head
        let indice = 0;

        while(atual !== null){
            if(atual.data === elemento){
                return indice
            }

            atual = atual.next;
            indice++
        }

        return -1
    }
}


console.log(listaEncadeada.insertFirst("Locomotiva"))
console.log(listaEncadeada.insertLast("Vagao 1"))
console.log(listaEncadeada.insertLast("Vagao 2"))
console.log(listaEncadeada.insertAt("Vagao intermediario", 1))
listaEncadeada.traversal()

console.log(listaEncadeada.searchAt(2))
console.log(listaEncadeada.indexOf("Vagao 2"))
console.log(listaEncadeada.deleteAt(1))
listaEncadeada.traversal()
