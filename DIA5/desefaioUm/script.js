let valorInvestido= 60000;
let taxaJuros = 0.0617;
let anoInvestimento = 3;

for(let i = 1; i <= anoInvestimento; i++){
    valorInvestido += valorInvestido * taxaJuros
    console.log(`No final do ano ${i}, o valor investido será de r$: ${valorInvestido.toFixed(2)}.`)
}
