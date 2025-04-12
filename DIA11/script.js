let avancar = [];
let voltar = [];
let atual = 'home';

function avancarPagina() {
    if (avancar.length > 0) {
        voltar.push(atual)
        atual = avancar.pop()
        console.log(`Avançando para a pagina ${atual}`)
        mostrarHistorio()
    } else {
        console.log(`Não há proxima anterior.`)
    }

}

function voltarPagina() {
    if (voltar.length > 0) {
        avancar.push(atual)
        atual = voltar.pop()
        console.log(`Voltando para: ${atual}`)
        mostrarHistorio()
    } else {
        console.log(`Não há paginas para avançar.`)
    }
}

function navegar(novaPagina) {
    if (novaPagina !== atual) {

        voltar.push(atual);
        atual = novaPagina;
        avancar = []
        console.log(`Navagando para: ${novaPagina}`)

    } else {
        console.log(`Já estamos na pagina: ${atual}`)
    }
}

function mostrarHistorio() {
    console.log("-".repeat(20))
    if (atual === '' || voltar.length === 0 || avancar.length === 0) {
        console.log("Não há historico de navegação...")
    } else {
        console.log(`Pagina Atual: ${atual}`)
        console.log(`Historico de voltar: ${[...voltar]}`)
        console.log(`Historico de avancar: ${[...avancar]}`)
    }
    console.log("-".repeat(20))
}

mostrarHistorio()

navegar("Twitter.com")
navegar("Instagram.com")
navegar("Whatsapp.com")

avancarPagina()

navegar("Google.com")

voltarPagina()
voltarPagina()


navegar("youtube")
