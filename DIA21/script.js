const conta = {
    saldo: 50000,
    limiteDiario: 10000,
    totalTransferidoHoje: 0,
    historicoTransacoes: [],
    totalPorChave: {}
}


function enviarPix(chavePix, valor, mensagem = "", data){
    // calcula o total ja transferido por essa chave
    if(!conta.totalPorChave[chavePix]){   
        conta.totalPorChave[chavePix] = 0;
    }

    const totalPorEssaChave = conta.totalPorChave[chavePix];
    const limitePermitido = totalPorEssaChave > conta.limiteDiario ? totalPorEssaChave : conta.limiteDiario;

    // calcula o total transferido hoje (com base no hisotorico)
    let totalHoje = 0;
    for(let i = 1; i < conta.historicoTransacoes.length; i++){

        const transacao = conta.historicoTransacoes[i];
        if(transacao.data === data && transacao.tipo === 'PIX'){
            totalHoje += transacao.valor;
        }

    }

    // validacoes
    if(totalHoje + valor > limitePermitido){
        console.log(`❌ Limite diario de R$ ${limitePermitido.toFixed(2)} excedido para hoje.`)
        return
    }

    if(conta.saldo < valor){
        console.log(`❌ Saldo insuficiente.`)
    }

    // realizar transferencia
    conta.saldo -= valor;
    conta.totalPorChave[chavePix] += valor;

    conta.historicoTransacoes.push({
        tipo: "PIX",
        chavePix,
        valor,
        mensagem,
        data
    })

    console.log(`✅ Pix de ${valor.toFixed(2)} enviado para ${chavePix} em ${data}`)
}

function cancelarPix(indiceTransacao, dataTransacao){
    const transacao = conta.historicoTransacoes[indiceTransacao]

    if(!transacao || transacao.tipo !== "PIX"){
        console.log(`❌ Transação invalida para cancelamento.`)
        return
    }

    const {chavePix, valor, data} = transacao

    conta.saldo += valor;

    conta.totalPorChave[chavePix] -= valor

    conta.historicoTransacoes.push({
        tipo: "REEMBOLSO",
        chavePix,
        valor,
        mensagem: 'Reembolso de Pix',
        data
    })

    console.log(`🔄️ Pix cancelado. Valor de ${valor.toFixed(2)} devolvido para a conta.`)
}

enviarPix("josue@gmail.com", 1000, "Emprestimo", "10-04-2025")
enviarPix("josue@gmail.com", 500, "Pagamento de titulos", "18-03-2025")
enviarPix("37479359000101", 5000, "Compra de equipamento", "01-04-2025")
enviarPix("65993408371", 9000, "Transferencia Bancaria", "15-04-2025")
console.log("-".repeat(100))
cancelarPix(1)

console.log("\n💰 Saldo Final:", conta.saldo);
console.log("📄 Histórico de Transações:");
console.table(conta.historicoTransacoes);

console.log("📊 Total por chave:");
console.log(conta.totalPorChave);