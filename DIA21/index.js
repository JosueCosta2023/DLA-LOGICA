const conta = {
    saldo: 50000,
    limiteDiario: 10000,
    totalTransferidoHoje: 0,
    historicoTransacoes: [],
    totalPorChave: {} // Armazena total transferido por chave Pix
};

// PSEUDO-CODIGO
/* 
    funcao enviarPix(chavePix, valor, mensagem){
        se saldo < valor -> erro

        se chavePix Bloqueada & (totalHoje + valor > limiteDiario) -> erro

        atualizar saldo, totalHoje, totalPorChave[chavePix]
    }

    funcao cancelarPix(indice){
        localizar transação

        se ja cancelada -> erro;

        estornar valores

        marcar como cancelada

    }
*/


function enviarPix(chavePix, valor, mensagem){
    if(conta.saldo < valor){
        console.log(`Não há saldo o suficiente para fazer a transação.`)
        return
    }

    if((conta.totalTransferidoHoje + valor) > conta.limiteDiario){
        console.log(`Seu limite diario para transferencias pix é de ${conta.limiteDiario}`)
        console.log(`Tente novamente com um valor inferior ao limite diario.`)
        return
    }

    conta.saldo -= valor;
    conta.totalTransferidoHoje += valor
    conta.historicoTransacoes.push([chavePix, valor, mensagem])

   if(conta.totalPorChave[chavePix]){
       conta.totalPorChave[chavePix] += valor
    } else {
       conta.totalPorChave[chavePix] = valor
   }

}


function estornarTransação(indice){
   
}

enviarPix("josue@gmail.com", 5000, "Fatura de cartão de credito")
enviarPix("josue@gmail.com", 1000, "Emprestimos")
enviarPix("37479359000101", 1000, "Compra do mês de Agosto")

estornarTransação()

console.log(conta)