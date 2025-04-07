const obterDiasDaSemana = (num) => {
    let diaDaSemana = num

    switch(diaDaSemana){
        case 1:
            diaDaSemana = "Domingo"
            break;
        case 2:
            diaDaSemana = "Segunda Feira"
            break;
        case 3:
            diaDaSemana = "Terça Feira"
            break;
        case 4:
            diaDaSemana = "Quarta Feira"
            break;
        case 5:
            diaDaSemana = "Quinta Feira"
            break;
        case 6:
            diaDaSemana = "Sexta Feira"
            break;
            case 7:
            diaDaSemana = "Sábado"
            break
        default:
            diaDaSemana = "Digite um numero entre 1 e 7 para obter os dias da semana."
            break;
    }

    return diaDaSemana
}

const dia = obterDiasDaSemana()
console.log("Hoje é: " + dia)