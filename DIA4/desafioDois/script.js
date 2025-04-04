const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const n1 = Number(frm.inN1.value);
    const n2 = Number(frm.inN2.value);
    const n3 = Number(frm.inN3.value);
    const n4 = Number(frm.inN4.value);
    const name = frm.inNome.value;

    const media = (n1 + n2 + n3 + n4) / 4

    const resultado = validarNotas(media)


    switch (resultado) {
        case "Insuficiente":
            resp.style.backgroundColor = "red"
            resp.style.color = "white"
            resp.style.padding = "20px"
            resp.style.borderRadius = "8px"


            resp.innerHTML = `
            <h6 class="outRespNota">${media}</h6>
            <h1>${name}</h1>
            <p>Seu desempenho nas avaliações foi - ${resultado}</p>
            `

            break;
        
        case "Bom":
            resp.style.backgroundColor = "gray"
            resp.style.color = "white"
            resp.style.padding = "20px"
            resp.style.borderRadius = "8px"

            resp.innerHTML = `
            <h6 class="outRespNota">${media}</h6>
            <h1>${name}</h1>
            <p>Seu desempenho nas avaliações foi  - ${resultado}</p>
            `
            break;
        
        case "Muito bom":
            resp.style.backgroundColor = "blue"
            resp.style.color = "white"
            resp.style.padding = "20px"
            resp.style.borderRadius = "8px"

            resp.innerHTML = `
            <h6 class="outRespNota">${media}</h6>
            <h1>F${name}</h1>
            <p>Seu desempenho nas avaliações foi  - ${resultado}</p>
            `
            break;

            default:
                resp.style.backgroundColor = "green"
                resp.style.color = "white"
                resp.style.padding = "20px"
                resp.style.borderRadius = "8px"
    
                resp.innerHTML = `
                <h6 class="outRespNota">${media}</h6>
                <h1>${name}</h1>
                <p>Parabéns!!! seu desempenho nas avaliações foi  - ${resultado}</p>
                ` 
    }

    frm.reset()
    frm.inNome.focus()

})

const validarNotas = (media) => {
    let resultado

    console.log(media)

    if (media <= 50) {
        resultado = "Insuficiente"
    } else if (media < 60) {
        resultado = "Bom"
    } else if (media < 75) {
        resultado = "Muito bom"
    } else {
        resultado = "Excelente"
    }

    return resultado
}