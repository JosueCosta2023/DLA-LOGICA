const menu = [
    {nome: "home"},
    {
        nome: "Produtos",
        filhos: [
            {
                nome: "Roupas",
                filhos: [
                    {
                        nome: "Camisetas",
                        nome: "Calças"
                    }
                ]
            },
            {nome: "Calçados"}
        ]
    },
    {nome: "Contato"}
]

function mostrarMenu(itens, nivel = 0){
    for(const item of itens){
        console.log(" ".repeat(nivel * 2) + "- " + item.nome);

        if(item.filhos){
            mostrarMenu(item.filhos, nivel + 1)
        }
    }
}

mostrarMenu(menu)