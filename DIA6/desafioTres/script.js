let valorInvestido = 1000;
let taxaJuros = 0.50;
let valorFinal = valorInvestido * 2;
let anosInvestimento = 0;


const calculoDeRendimento = (valorInvestido, valorFinal, taxaJuros) => {
    while(valorInvestido < valorFinal){
        valorInvestido += valorInvestido * taxaJuros;
    
        anosInvestimento++
    }

    return anosInvestimento
}

anosInvestimento = calculoDeRendimento(valorInvestido, valorFinal, taxaJuros)

console.log(`Levará ${anosInvestimento} anos para o investimento dobrar.`)