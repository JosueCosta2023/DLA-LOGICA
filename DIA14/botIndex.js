// Criando 10 filas (caixas) vazias
const caixas = Array.from({ length: 10 }, () => []);

// Adiciona cliente na fila com menor tamanho
function adicionarCliente(nome) {
  let menorFila = caixas[0];
  for (let fila of caixas) {
    if (fila.length < menorFila.length) {
      menorFila = fila;
    }
  }
  menorFila.push(nome);
  console.log(`Cliente ${nome} adicionado com sucesso!`);
}

// Atende (remove) o primeiro cliente de um caixa específico
function atenderCliente(caixaIndex) {
  if (caixaIndex < 0 || caixaIndex >= caixas.length) {
    console.log("Número de caixa inválido!");
    return;
  }
  const cliente = caixas[caixaIndex].shift();
  if (cliente) {
    console.log(`Cliente ${cliente} atendido no caixa ${caixaIndex + 1}.`);
  } else {
    console.log(`Nenhum cliente na fila do caixa ${caixaIndex + 1}.`);
  }
}

// Exibe o estado atual das filas
function exibirFilas() {
  console.log("\nEstado atual dos caixas:");
  caixas.forEach((fila, index) => {
    console.log(`Caixa ${index + 1}: ${fila.join(", ") || "(vazio)"}`);
  });
}

const nomesClientes = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda",
    "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Larissa",
    "Marcos", "Natalia", "Otávio", "Patrícia", "Quésia", "Renato",
    "Sabrina", "Thiago", "Ursula", "Vanessa", "William", "Ximena",
    "Yasmin", "Zeca", "Luan", "Camila", "Pedro", "Beatriz"
  ];
  
  for(let i = 0; i < nomesClientes.length; i++){
    adicionarCliente(nomesClientes[i])
  }

// Exemplo de uso:
exibirFilas();
atenderCliente(0);
atenderCliente(1);
atenderCliente(2);
atenderCliente(6);
atenderCliente(5);
atenderCliente(0);
atenderCliente(7);
atenderCliente(7);
atenderCliente(8);
atenderCliente(8);
atenderCliente(8);
atenderCliente(9);
atenderCliente(9);
atenderCliente(10);
atenderCliente(10);
exibirFilas();
