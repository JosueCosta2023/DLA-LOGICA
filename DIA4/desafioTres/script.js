const resp = document.querySelector("#outResp")


let nota  = 10
let situacao

situacao = nota >= 70 ?  "aprovado" :  "reprovado"

if(situacao === "aprovado"){
    resp.style.backgroundColor = "green"
    resp.style.color = "white"
    resp.style.padding = "40px"
    resp.style.textTransform = "Capitalize"

} else {
    resp.style.backgroundColor = "red"
    resp.style.color = "white"
    resp.style.padding = "40px"
    resp.style.textTransform = "Capitalize"
}
resp.innerText = situacao
