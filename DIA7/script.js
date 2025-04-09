let saldoConta1 = 600;
let saldoConta2 = 400;
let limite = 0;
let jurosLimite = 0;

const perncentualLimite = 0.10;
const saldoMinimoLimite = 1000;
const taxaConversaoDolar = 5.23;

// 
function saldoTotal() {
    let total = saldoConta1 + saldoConta2;
    if (total >= saldoMinimoLimite) {
        limite = total * perncentualLimite;
    }
    return total
}

function alertaSaldo() {
    if (saldoConta1 <= 0) {
        console.log("Conta 1 esta sem saldo ou utilizando o limite.")
    }

    if (saldoConta2 <= 0) {
        console.log("Conta 2 esta sem saldo ou utilizando o limite.")
    }
}

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

function debitar(conta, valor) {
    if(conta === 1 && valor <= (saldoConta1 + limite)){
        saldoConta1 -= valor;

    } else if(conta === 2 && valor <= (saldoConta2 + limite)) {
        saldoConta2 -= valor;

    } else {
        console.log(`Saldo insuficiente para debito na conta ` + conta)
    }
 }


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


function converterSaldoParaDolar(conta) {
    if(conta === 1){
        return saldoConta1 / taxaConversaoDolar
    } else if(conta === 2){
        return saldoConta2 / taxaConversaoDolar
    }
 }
function exibirLimite() {
    return limite.toFixed(2)
 }
function exibirJurosLimite() {
    return jurosLimite.toFixed(2)
 }

console.log('Saldo total: R$' + saldoTotal());
alertaSaldo();
depositar(1, 100);
debitar(2, 50);
transferir(200, 1, 2);
console.log('Saldo conta 1 em dólares: US$' + converterSaldoParaDolar(1).toFixed(2));
console.log('Saldo conta 2 em dólares: US$' + converterSaldoParaDolar(2).toFixed(2));
console.log('Limite: R$' + exibirLimite());
console.log('Juros do Limite: R$' + exibirJurosLimite());

