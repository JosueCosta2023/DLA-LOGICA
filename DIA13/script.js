const deckDeTarefas = [];

function addTarefa(dados){
    dados.map((dado) => {
        if(dado.prioridade === "Urgente"){
            deckDeTarefas.unshift(dado)
        } else if(dado.prioridade === "Comum") {
            deckDeTarefas.push(dado)
        }
    })
}

const dados = [
    {
        descricao: "Ir ao medico",
        prioridade: "Comum"
    },
    {
        descricao: "Comprar pão",
        prioridade: "Comum"
    },
    {
        descricao: "Fazer café",
        prioridade: "Comum"
    },
    {
        descricao: "Abastecer Veiculos",
        prioridade: "Urgente"
    },
    {
        descricao: "Beber agua",
        prioridade: "Urgente"
    },
]
addTarefa(dados)

function buscarLista(){
    return deckDeTarefas.slice()
}

console.log(buscarLista())


