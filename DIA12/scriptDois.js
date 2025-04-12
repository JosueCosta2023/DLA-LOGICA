let filaAtendimento = [];

function entrarNaFila(carro) {
    for (let car of carro) {
        filaAtendimento.push(car)
    }
}

let carro = [
    {
        nome: "Josue",
        totem: "123456",
        pedido: "Pizza huts"
    },
    {
        nome: "Ana Maria",
        totem: "122896",
        pedido: "MacLanche Feliz"
    },
    {
        nome: "Janaina",
        totem: "198872",
        pedido: "Pizza"
    },
    {
        nome: "Mark",
        totem: "1277756",
        pedido: "Coca cola"
    }

]

entrarNaFila(carro)

console.log("|".repeat(40));
console.log("Bem vindo ao melhor DriveTrue da cidade.")
console.log("cliente nas fila", filaAtendimento.length)

if (filaAtendimento.length > 0) {
    
    filaAtendimento.forEach((cliente, i) => {
        setTimeout(() => {
            console.log(`${cliente.nome} em atendimento... Pedido: ${cliente.pedido}`) 
            setTimeout(() => {
                console.log(`Cliente ${cliente.nome} atendido(a), volte sempre!`)
                console.log("+".repeat(40))
            }, 1500);
        },i * 3000);
    })

}
const tempoAtendimento = filaAtendimento.length * 4500;

setTimeout(() => {
    console.log(`Todos os cliente foram atendidos. Boa noite`)
}, tempoAtendimento);

console.log("+".repeat(40));