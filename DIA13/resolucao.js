const tarefas = [];

function inserirInicio(tarefa){
    tarefas.unshift(tarefa)
    console.log(`Tarefa ${tarefa} adicionado com alta prioridade.`)
}

function inserirFim(tarefa){
    tarefas.push(tarefa);
    console.log(`Tarefa ${tarefa} adicionada com baixa prioridade.`)
}

function removerInicio(){
    if(!estaVazio()){
        console.log(`Tarefa ${tarefas.shift()} com alta prioridade foi removida.`)
    } else {
        console.log("Não há tarefas para remover")
    }
}

function removerFim(){
    if(!estaVazio()){
        console.log(`Tarefa ${tarefas.pop()} com baixa prioridade foi removida.`)
    } else {
        console.log("Não há tarefas para remover.")
    }
}

function estaVazio(){
    return tarefas.length === 0;
}

function obterTarefas(){
    return tarefas.slice()
}

function aumentarPrioridade(tarefa){
    let index = tarefas.indexOf(tarefa)

    if(index > 0){
        let temp = tarefas[index - 1]

        tarefas[index - 1] = tarefas[index]

        tarefas[index = temp]

        console.log(`Prioridade da tarefa ${tarefa} foi aumentada.`)

    } else {
        console.log("A tarefa ja esta com a minima prioridade ou não existe.")
    }
}

function diminuirPrioridade(tarefa){

    let index = tarefas.indexOf(tarefa)

    if(index !== -1 && index < tarefas.length - 1){

        let temp = tarefas[index + 1];

        tarefas[index + 1] = tarefas[index];

        tarefas[index] = temp

        console.log(`Prioridade da tarefa ${tarefa} foi diminuida.`)

    } else {
        console.log("A tarefa ja esta com a minima prioridade ou não existe.")
    }

}

inserirFim("Comprar Arroz");
inserirInicio("Ir ao hospital");
inserirFim("Camprar pão")

console.log("Tarefas atuais: ", obterTarefas());

aumentarPrioridade("Camprar Arroz")

diminuirPrioridade("Ir ao hospital")

console.log("Tarefas apos ajuste em prioridades: ", obterTarefas())

removerInicio()
console.log("Tarefas apos remoção: ", obterTarefas())