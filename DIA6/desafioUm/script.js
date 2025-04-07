const Imc = (pes, alt) => {
    let peso = pes;
    let altura = alt

    return peso / (altura ** 2)
}



const resultado = Imc(71, 1.79)

console.log("Seu imc é: " + resultado.toFixed(2))

