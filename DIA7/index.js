class ContaBancaria {
    constructor(nome, saldoInicial = 0) {
        this.nome = nome;
        this.saldo = saldoInicial;
        this.jurosLimite = 0;
        this.limite = 0;
    }

    calcularLimite(saldoMinimo = 1000, percentual = 0.10) {
        if (this.saldo >= saldoMinimo) {
            this.limite = this.saldo * percentual;
        }
    }

    depositar(valor) {
        if (this.saldo < 0) {
            // Se estiver usando o limite, aplica juros
            this.jurosLimite += valor * 0.15;
        }
        this.saldo += valor;
        console.log(`${this.nome}: Depósito de R$${valor.toFixed(2)} realizado.`);
    }

    sacar(valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            console.log(`${this.nome}: Saque de R$${valor.toFixed(2)} realizado.`);
        } else {
            console.log(`${this.nome}: Saldo insuficiente para saque.`);
        }
    }

    transferir(destino, valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            destino.depositar(valor);
            console.log(`${this.nome}: Transferência de R$${valor.toFixed(2)} para ${destino.nome} realizada.`);
        } else {
            console.log(`${this.nome}: Saldo insuficiente para transferir.`);
        }
    }

    saldoEmDolar(taxaCambio = 5.23) {
        return (this.saldo / taxaCambio).toFixed(2);
    }

    exibirInfo() {
        console.log(`\n--- ${this.nome} ---`);
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
        console.log(`Limite disponível: R$${this.limite.toFixed(2)}`);
        console.log(`Juros sobre limite: R$${this.jurosLimite.toFixed(2)}`);
        console.log(`Saldo em dólar: US$${this.saldoEmDolar()}`);
    }
}


// Criando duas contas
const conta1 = new ContaBancaria('Josue', 4100);
const conta2 = new ContaBancaria('Heleonor', 2400);

// Cálculo de limite baseado no saldo individual
conta1.calcularLimite();
conta2.calcularLimite();

// Operações
conta1.depositar(300);   // Agora saldo = 1000 → vai liberar limite depois
conta2.sacar(200);       // Saque comum
conta1.transferir(conta2, 500); // Transfere R$500 da conta1 para conta2

// Recalcula limite com base no novo saldo
conta1.calcularLimite();
conta2.calcularLimite();

// Exibe tudo
conta1.exibirInfo();
conta2.exibirInfo();
