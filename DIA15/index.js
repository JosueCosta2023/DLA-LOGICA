// LISTAS ENCADEADAS        
// objeto literal

let objeto = {
    key: "value"
}

let pessoa = {
    nome:"Josue",
    idade:33,
    hobbies: ["jogar", "malhar", "correr"],
    falar: function(){
        console.log("Olá, meu nome é " + this.nome)
    }
}


console.log(pessoa.nome + " ama " + pessoa.hobbies[2])
 

