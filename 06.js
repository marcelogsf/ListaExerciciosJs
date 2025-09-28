function calcularInvestimento() {
  let capital = parseFloat(prompt("Digite o capital inicial investido (R$):"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
  let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

 
  let i = taxa / 100;

  
  let montante = capital * Math.pow(1 + i, tempo);

  alert(
    `Capital inicial: R$ ${capital.toFixed(2)}\n` +
    `Taxa de juros: ${taxa}% ao mês\n` +
    `Tempo: ${tempo} meses\n\n` +
    `➡ Montante final: R$ ${montante.toFixed(2)}`
  );
}


calcularInvestimento();
