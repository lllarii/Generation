const leia = require('readline-sync');
let n1, n2, n3, n4, calculo;

console.log("*** CALCULADORA ***");
console.log("\nDescubra a diferença entre os produtos!");

n1 = leia.questionInt("\nDigite o primeiro numero: ");
n2 = leia.questionInt("\nDigite o segundo numero: ");
n3 = leia.questionInt("\nDigite o terceiro numero: ");
n4 = leia.questionInt("\nDigite o quarto numero: ");

calculo = (n1*n2) - (n3 * n4);

console.log("\nO resultado do seu cálculo é: " + calculo)
