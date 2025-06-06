const leia = require('readline-sync')
let numero, soma;

console.log("** Exercício 5 - Laço de Repetição DO... WHILE **");
console.log("\nVAMOS SOMAR!")

soma = 0

do
{
    numero = leia.questionInt("\nDigite um numero: ");
    if (numero>0)
    {
        soma = soma + numero
    } 
} while (numero!=0)

if (soma == 0)
{
    console.log("Você não digitou números positivos para somar!");
}
else
{
    console.log(`\nA soma dos números positivos é: ${soma}`);
}
