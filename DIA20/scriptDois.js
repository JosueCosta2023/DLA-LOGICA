const mensagens = [
    {
        nome: "Ana",
        mensagem: "Oi, você viu o relatório que mandei ontem?",
        telefone: "11999999999",
        data: "2025-04-01"
    },
    {
        nome: "Bruno",
        mensagem: "Vamos almoçar juntos amanhã?",
        telefone: "11988888888",
        data: "2025-04-15"
    },
    {
        nome: "Carlos",
        mensagem: "Segue o relatório atualizado.",
        telefone: "11977777777",
        data: "2025-04-20"
    },
    {
        nome: "Daniela",
        mensagem: "Relatório final enviado. Verifique!",
        telefone: "11966666666",
        data: "2025-04-20"
    },
    {
        nome: "Vanessa Weber",
        mensagem: "Está chegando ao fim do Desafio do Código Fonte TV",
        telefone: "12977445588",
        data: "2025-04-21"
    }
];


function buscarMenssagensPorPalavra(lista, palavra, indice = 0, encontrados = []) {
    // Caso haja dados retorne o array encontrados
    if (indice >= lista.length) return encontrados;

    // Comversao da palavra e da mensagem em minustculo
    const msg = lista[indice].mensagem.toLowerCase();
    const termo = palavra.toLowerCase();

    // Varifica se existe a palavara na mensagem
    if (msg.includes(termo)) {

        // Se encontrar encaminha o indice para a variavel encontrados
        encontrados.push(indice)
    }

    // Indo ao proximo indice de forma recursiva
    return buscarMenssagensPorPalavra(lista, palavra, indice + 1, encontrados)
}

const resultado = buscarMenssagensPorPalavra(mensagens, "relatorio")

if(resultado.length === 0){
    console.log(`Não há mensagens com o termo solicitado.`)
    return
}

for (let i = 0; i < resultado.length; i++) {
        const index = resultado[i];
        const { nome, telefone, data } = mensagens[index];

        console.log(`Econtrado em ${nome} (${telefone}) em ${data}`)
}