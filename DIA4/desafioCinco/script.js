const resp = document.querySelector("#outResp")

const inputValue = document.querySelectorAll(".inputItem")

inputValue.forEach(radio => {
    radio.addEventListener("change", () => {
        let estado = "";  
        if(radio.checked){
            estado =  radio.value          
            escolhas(estado)
        }
    })
})


const escolhas = (estado) => {
    switch(estado){
        case "Aberta":
            resp.innerText = "Seja bem vindo, entre e encontre sua vaga em nosso estacionamento";
            Object.assign(resp.style, styleOpen)
            break
        case "Fechado":
            resp.innerText = "Olá, hoje estamos fechado. Nosso Horario de atendimento é: " + "\n" + "Segunda a Sexta 07:00 as 19:00horas";
            Object.assign(resp.style, styleClose)
            break
        case "Manutencao":
            resp.innerText = "Olá, desculpe o enconveniente mas esta entrada do estacionamento esta em manutenção. "+ "\n" +" Por gentileza dirija-se a proxima entrada.";
            Object.assign(resp.style, styleManager)
            break
    }
}

window.addEventListener("load", () => {
    inputValue.forEach(radio => {
        if(radio.checked){
            escolhas(radio.value)
        }
    })
}) 

const styleOpen = {
    backgroundColor: "green",
    padding: "40px",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "20px",
    color: "white",
    borderTop: "30px solid gray",
}
const styleClose = {
    backgroundColor: "red",
    padding: "40px",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "20px",
    color: "white",
    borderTop: "30px solid black",
}
const styleManager = {
    backgroundColor: "orange",
    padding: "40px",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "20px",
    color: "white",
    borderTop: "30px solid black",
}







