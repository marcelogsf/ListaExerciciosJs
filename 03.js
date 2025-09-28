let N = parseInt(prompt("Quantos números você quer digitar?"));
let numeros = [];

for (let i = 1; i <= N; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  numeros.push(numero);
}


let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let num of numeros) {
  if (num < menor) menor = num;
  if (num > maior) maior = num;
  soma += num;
}

alert(
  `Menor valor: ${menor}\n` +
  `Maior valor: ${maior}\n` +
  `Soma dos valores: ${soma}`
);
