let valorInvestido = 1000;
let taxaJuros = 0.05;
let valorFinal = valorInvestido * 2;


let anosInvestimento = 0;


while(valorInvestido < valorFinal){
    valorInvestido += valorInvestido * taxaJuros;

    anosInvestimento++
}

console.log(`Levará ${anosInvestimento} anos para o investimento dobrar.`)