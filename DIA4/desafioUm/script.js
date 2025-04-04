const frm = document.querySelector("form")
const resp = document.querySelector("h2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = frm.inIdade.value;

    const respostaInput = frm.inSim.checked;

    const retornor = validaVencimento(idade, respostaInput)

    resp.innerText = retornor === "menor" ? `Você não tem idade para fazer uma CNH` : `O prazo de vencimento para sua habilitação é de ${retornor}.`;
})

const validaVencimento = (idade, respInput) => {
    let retorno

    if(idade < 18){
        return retorno = "menor"
    }

    if(respInput === true){
        retorno = "1 ano"
        return retorno
    } 

    if(idade < 50 ){
        retorno = "10 anos"
    } else if(idade >= 50 && idade < 70){
        retorno = "5 anos"
    } else if(idade >= 70){
        retorno = "3 anos"
    }

    return retorno
}