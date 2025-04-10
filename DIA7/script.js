
// saldoConta1 e saldoConta2: saldos das duas contas.

// limite: valor de crédito adicional liberado, tipo "cheque especial".

// jurosLimite: acumula juros caso a conta entre no negativo.

// perncentualLimite: 10% do saldo total será liberado como limite, se a soma dos saldos for igual ou maior que saldoMinimoLimite.

// taxaConversaoDolar: usado pra converter o saldo em reais para dólar.
let saldoConta1 = 700;
let saldoConta2 = 900;
let limite = 0;
let jurosLimite = 0;

const perncentualLimite = 0.10;
const saldoMinimoLimite = 1000;
const taxaConversaoDolar = 5.23;




// Soma os saldos das duas contas.
// Se o total for maior ou igual a R$ 1.000, ativa um limite de crédito (10% do total).
// Retorna o saldo total.
function saldoTotal() {
    let total = saldoConta1 + saldoConta2;
    if (total >= saldoMinimoLimite) {
        limite = total * perncentualLimite;
    }
    return total
}

// Exibe alertas se alguma conta estiver zerada ou negativa (usando o limite).
function alertaSaldo() {
    if (saldoConta1 <= 0) {
        console.log("Conta 1 esta sem saldo ou utilizando o limite.")
    }

    if (saldoConta2 <= 0) {
        console.log("Conta 2 esta sem saldo ou utilizando o limite.")
    }
}


// Se a conta está negativa, aplica 15% de juros sobre o valor depositado.
// Aplica uma redução no saldo da conta: multiplica por 85% (parece representar uma "taxa" de serviço ou retenção no depósito, o que é estranho e pode ser um erro de lógica).
function depositar(conta, valor) {
    if (conta === 1) {
        if (saldoConta1 < 0) {
            jurosLimite += valor * 0.15;
        }

        saldoConta1 *= 0.85

    } else if (conta === 2) {
        if (saldoConta2 < 0) {
            jurosLimite += valor * 0.15
        }

        saldoConta2 *= 0.85

    }
}


// Verifica se a conta tem saldo suficiente (incluindo o limite).
// Se sim, debita o valor. Se não, avisa que o saldo é insuficiente.
function debitar(conta, valor) {
    if(conta === 1 && valor <= (saldoConta1 + limite)){
        saldoConta1 -= valor;

    } else if(conta === 2 && valor <= (saldoConta2 + limite)) {
        saldoConta2 -= valor;

    } else {
        console.log(`Saldo insuficiente para debito na conta ` + conta)
    }
 }

//  Verifica se a conta de origem tem saldo.
//  Se tiver, debita da origem e chama o depósito para a conta destino.
function transferir(contaOrigem, contaDestino, valor) {
    if(contaOrigem === 1 && valor <= saldoConta1){
        debitar(1, valor);
        depositar(contaDestino, valor);

    } else if(contaOrigem === 2 && valor <= saldoConta2){
        debitar(2, valor);
        depositar(contaDestino, valor);

    } else {
        console.log(`Saldo insuficiente para transferencia na conta `+ contaOrigem)
    }
 }

// Converte o saldo da conta escolhida para dólar, usando a taxa definida.
function converterSaldoParaDolar(conta) {
    if(conta === 1){
        return saldoConta1 / taxaConversaoDolar
    } else if(conta === 2){
        return saldoConta2 / taxaConversaoDolar
    }
 }

// Retornam valores formatados com 2 casas decimais, para exibir no console.
function exibirLimite() {
    return limite.toFixed(2)
 }

//  Retornam valores formatados com 2 casas decimais, para exibir no console.
function exibirJurosLimite() {
    return jurosLimite.toFixed(2)
 }

// Resumo da lógica de programação
// Controle de duas contas com saldo, limite e juros.
// Condições if/else para validações básicas.
// Uso de variáveis globais para armazenar saldo e limite (poderia ser encapsulado em objetos ou classes).
// Uso de funções para modularizar cada ação: depósito, débito, alerta, conversão etc.
// Tem um estilo procedural, bem direto.
console.log('Saldo total: R$' + saldoTotal());
alertaSaldo();
depositar(1, 100);
debitar(2, 50);
transferir(1, 2, 300);
console.log('Saldo conta 1 em dólares: US$' + converterSaldoParaDolar(1).toFixed(2));
console.log('Saldo conta 2 em dólares: US$' + converterSaldoParaDolar(2).toFixed(2));
console.log('Limite: R$' + exibirLimite());
console.log('Juros do Limite: R$' + exibirJurosLimite());

