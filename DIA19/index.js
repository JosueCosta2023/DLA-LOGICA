// exemplo de recursão direta
function fatorial(n){
    if(n === 0) {
        return 1
    };

    return n * fatorial(n -1)
}


function atendenteJoao(numero){
    if(numero <= 0){
        console.log("Fim de Atendimentos.")
        return
    }

    if(numero % 2 === 0){
        console.log("João atendeu o numero", numero )
        return
    }

    atendenteMaria(numero)
}

function atendenteMaria(numero){
    if(numero <= 0){
        console.log("Fim de Atendimentos.")
        return
    }

    if(numero % 2 !== 0){
        console.log("Maria atendeu ao numero", numero)
        return
    }

    atendenteJoao(numero)

}

const pastas = [
    "computador", [
        'Usuarios', [
            'Gabriel', [
                'fotos.jpg',
                'documentos', [
                    'Projetos', ['capa.jpg']
                ],
                'imagens',[
                    'wallpaper.jpg',
                    'Viagens', [
                        'ferias.jpg',
                        'ferias.jpg', [
                            'Descartadas', [
                                'ferias.jpg',
                                'ferias.jpg',
                                'ferias.jpg',
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];

function contadorFotos(estrutura){
    let contador = 0;

    for(let i = 0; i < estrutura.length ; i++){
        const item = estrutura[i]

        if(Array.isArray(item)){

            contador += contadorFotos(item)

        } else if(typeof item === "string" && item.endsWith(".jpg")){
            contador++
        }
    }

    return contador
}


const total = contadorFotos(pastas)
console.log(`Total de fotos encontradas: ${total}`)


