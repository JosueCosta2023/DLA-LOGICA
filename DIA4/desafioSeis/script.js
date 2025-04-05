const resp = document.querySelector("#outResp")

let tipo = ""
let produto = 19.99;
let desconto = 0;
let total = 0;

switch(tipo){
    case "Alimento":
        desconto = 0.10;
        total = produto - (produto * desconto);
        resp.innerText = `O valor do produto é ${produto.toFixed(2)} mas você ira pagar apenas ${total.toFixed(2)}`
        break

    case "Eletronicos":
        desconto = 0.20;
        total = produto - (produto * desconto);
        resp.innerText = `O valor do produto é ${produto.toFixed(2)} mas você ira pagar apenas ${total.toFixed(2)}`
        break;

        default:
            desconto = 0;
            total = produto - (produto * desconto);
            resp.innerText = `O valor do produto é ${produto.toFixed(2)} você ira pagar o valor integral ${total.toFixed(2)}`
            break

}













