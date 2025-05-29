const leia = require('readline-sync')
let A, B, C;
console.log("** Exercício 1 - Laço Condicional IF **");
A = leia.questionInt("\n Digite um numero inteiro para A: ");
B = leia.questionInt("\n Digite um numero inteiro para B: ");
C = leia.questionInt("\n Digite um numero inteiro para C: ");
if ((A + B) > C)
{
    console.log("\nA soma de A + B é maior do que C.")
}
else if ((A + B) < C)
{
    console.log("\nA soma de A + B é menor do que C.")
}
else
{
    console.log("\nA soma de A + B é igual a C.")
}
