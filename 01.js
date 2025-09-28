let popA = 80000;
let popB = 200000;

const taxaA = 0.03;
const taxaB = 0.015;

let anos = 0;

while (popA < popB) {
    popA += popA * taxaA;
    popB += popb * taxaB;
    anos++;
}    
console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B.`);
console.log(`População A: ${Math.floor(popA)}`);
console.log(`População B: ${Math.floor(popB)}`);
