const cidade = {
    bairro1: ["Rua A", "Rua B"],
    bairro2: ["Rua C", "Rua D"]
}

for(let bairro in cidade){
    console.log(`${bairro}: ${cidade[bairro].join(", ")}`)
}

let persona = {
    Name: ["Azvaloth", "Freeman"],
    Armas: ["Dancer Sword", "Black-King Sword"],
    Escudos: ["Moon Full", "Sun Lifithing"],
    Armadura: ["Rose Dragon", "Baela Siren"],
    Capa: ["Lord Efinity", "Rose Dragon"],
    Montaria: ["Darck Hourse", "White Horn"]
}

for(let itens in persona){
    console.log(`${itens}: ${persona[itens].join(", ")} \n`)
}

const person = [
    {
        Name: "Azvaloth",
        Armas: "Dancer Sword",
        Escudos: "Moon Fall",
        Armadura: "Rose Dragon",
        Capa: "Lord Efinity",
        Montaria: "Darck Hourse"
    },
    {
        Name: "Freeman",
        Armas: "Black-King Sword",
        Escudos: "Sun Lifithing",
        Armadura: "Baela Siren",
        Capa: "Rose Dragon",
        Montaria: "White Horn"
    }
]

for(let caracter of person){
    console.log(`${caracter.Name} utiliza a espada ${caracter.Armas} juntamente com o escudo ${caracter.Escudos}. Sua montaria é ${caracter.Montaria}, ele vem tranjando a armadura ${caracter.Armadura} e utiliza a capa ${caracter.Capa}. \n`)
}