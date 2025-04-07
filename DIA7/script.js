let contaCorrente = 500;
let contaPoupança = 0;

const verifacaoDeContas = (contaCorrente, contaPoupança) => {
    if (contaCorrente < 0 || contaPoupança < 0) {
        return true
    }
}

const gerarLimiteDeCredito = (contaCorrente, contaPoupança) => {
    let soma = contaCorrente + contaPoupança;
    let limiteDeCredito = 0;

    if (soma >= 1000) {
        limiteDeCredito = (soma * 0.10)
    }
    return limiteDeCredito
}

const credito = gerarLimiteDeCredito(contaCorrente, contaPoupança)

const analise = verifacaoDeContas(contaCorrente, contaPoupança)

// Exibição aos clientes


if ((credito === 0 || credito === null || credito === undefined) && analise === true) {
    console.log("Você não possui credito em nossa instituição. \nVerifique os saldos de suas contas bancarias.")
} else {
    console.log("Seu limite de credito atual é: R$" + credito)
}


// Criar duas contas bancarias

// Elas devem compartilhar de um mesmo limiteDeCredito iniciado por 0

// Caso o saldo de uma das contas atinja o valor de R$ 1000,00 então o limite será de 10%

// Criar 2 variaveis que controlam o saldo de 2 caontas bancarias. As contas compartilham de um limite (que tambem será ou variavel), porem começa em 0.

// A partir do momento que o saldo total das contas atingir R$ 1000, o limite serpa de 10%. Utizando um saldo inicial dessas contas, efetue alguns calculos atraves de funcções que façam o seguinte.

//  1° Calcular o saldo total das contas.
//  2° Exibir um alerta caso alguma conta esteja sem saldo ou utilizando o limite.
//  3° Fazer deposito em alguma das contas
//  4° Efetuar debito em alguma das contas.
//  5° Transferir um determinado valor de uma conta para outra, somente se tiver saldo disponivel
//  6° Fazer a conversão do saldo (que esta em R$) para Dolar (us$)