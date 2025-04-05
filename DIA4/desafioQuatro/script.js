const resp = document.querySelector("#outResp")

let credito = 1600;
let cadastroAtivo = true
let situacao;

situacao = credito >= 500 && cadastroAtivo === true ? "O cliente esta apito para realizar suas compras" : "Atenção, cliente com problemas cadastrais."


let styleSuccess = {
    backgroundColor: "green",
    color: "white",
    padding: "40px",
    textTransform: "Capitalize",
    fontWeight: "bold",
    letterSpacing: "2px"
}

let styleFail = {
    backgroundColor: "red",
    color: "white",
    padding: "40px",
    textTransform: "Capitalize",
    fontWeight: "bold",
    letterSpacing: "2px"
}

if (credito >= 500 && cadastroAtivo === true) {
    Object.assign(resp.style, styleSuccess)
} else {
    Object.assign(resp.style, styleFail)
}


resp.innerText = situacao
