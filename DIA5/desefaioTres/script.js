const capital = 1000;
const taxa = 10 / 100;
let montante;

const periodo = 10;

montante = capital * (1 + taxa) ** periodo

let dif = montante - capital

console.log(`Neste periodo de ${periodo} anos você obteve o lucro de ${dif.toFixed(2)}. Seu capital atual é de ${montante.toFixed(2)}.`)

