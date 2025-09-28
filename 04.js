let salario = 1000;
let anoInicio = 1995;
let anoAtual = new Date().getFullYear();

let percentual = 0.0015; 

for (let ano = anoInicio + 1; ano <= anoAtual; ano++) {
  salario += salario * percentual;

  
  if (ano >= 1997) {
    percentual *= 2;
  }
}

alert(`O salário atual em ${anoAtual} é: R$ ${salario.toFixed(2)}`);
