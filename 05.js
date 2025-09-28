function calcularCirculo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));

  const pi = Math.PI;
  let area = pi * Math.pow(raio, 2); 
  let perimetro = 2 * pi * raio;     

  alert(
    `Para um círculo de raio ${raio}:\n` +
    `Área = ${area.toFixed(2)}\n` +
    `Perímetro = ${perimetro.toFixed(2)}`
  );
}


calcularCirculo();
