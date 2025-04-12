let pilhaVoltar = []
let pilhaAvancar = []
let paginaAtual = null;


function navegarPara(pagina){
    if(paginaAtual){
        pilhaVoltar.push(paginaAtual)
        pilhaAvancar = [];
    }

    paginaAtual  = pagina;
    console.log("Navegando para: ", paginaAtual)
}


function voltar(){
    if(!pilhaVoltar.length){
        console.log("Nãi há paginas anteriores.")
        return
    }

    pilhaAvancar.push(paginaAtual);
    paginaAtual = pilhaVoltar.pop();
    console.log("Voltando para: ", paginaAtual)
}


function avancar(){
    if(!pilhaAvancar.length){
        console.log("Não ha paginas posteriores.")
        return
    }

    pilhaVoltar.push(paginaAtual)
    paginaAtual = pilhaAvancar.pop()
    console.log("Avançando para: ", paginaAtual)
}

/* Funcionamento do sistema copm as funções.
array = [
    "google.com", 
    "facebook.com", 
    "twitter.com", 
    "chinaInBox.com", 
    "Star.io"] 

/* 
    let paginaAtual = "facebook.com"

    let pagePrev = "google.com"
    let pageNext = "twitter.com"

    pageNext.pop()  === "chinaInBox.com"
    pagePrev.push() === "Não há navegação anterior"
*/

navegarPara("A");
navegarPara("B");
navegarPara("C");
voltar();
voltar();
avancar();
navegarPara("D")
voltar()