const response  =document.querySelector("pre")
const quantidadeLimite = 18;
const quantidadeDeCaixas = 2 * quantidadeLimite

let itens = new Array(quantidadeDeCaixas).fill("0")

function producao(itens, quantidadeLimite) {
    response.innerText +=`Iniciando produção... Itens na esteira ${itens.length} \n`

    while(itens.length > 0){
        let caixa = [];
        for(let i = 0; i < quantidadeLimite && itens.length > 0; i++){
            let item = itens.pop()
            caixa.push(item)
            response.innerText +=`Item ${i + 1} adicinado a caixa.\n`
        }
        response.innerText += `Caixa enviada para preparo e entrega, o numero de produtos restantes na esteira é:${itens.length}`

    }

    response.innerText += `\nProduçao concluída. Caixas encaminhadas para despacho e abastecimentos.`
}

producao(itens, quantidadeDeCaixas)
