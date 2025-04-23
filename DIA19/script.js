const fatura = [
    {
      descricao: "Celular",
      valor: 1200.00,
      parcelas: [
        { descricao: "Seguro", valor: 100.00 },
        { descricao: "Película", valor: 30.00 }
      ]
    },
    {
      descricao: "Notebook",
      valor: 3000.00,
      parcelas: [
        {
          descricao: "Assistência técnica",
          valor: 200.00,
          parcelas: [
            { descricao: "Visita técnica", valor: 50.00 }
          ]
        },
        {
          descricao: "Formatação de computador",
          valor: 270.00,
        }
      ]
    },
    {
      descricao: "Livro",
      valor: 89.90
    }
  ];

  function calcularTotal(fatura){
    let total = 0;

    for(let i =0; i < fatura.length; i++){

        const item = fatura[i];
        total += item.valor;

        if(item.parcelas){
            total += calcularTotal(item.parcelas)
        }

    }

    return total
  }

  const faturaMensal = calcularTotal(fatura)
  console.log("-".repeat(40))
  console.log(`Valor total a da fatura: R$ ${faturaMensal.toFixed(2)}`)