const leia = require('readline-sync')
let numero, par, impar;
console.log("** Exercício 2 - Laço de Repetição FOR **");
//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares.

par = 0;
impar = 0;

for (let i = 1; i <= 10; i++)
{
    numero = leia.questionInt("\nDigite um numero: ");
    if (numero %2 == 0)
    {
        par = par + 1;
    }
    else
    {
        impar = impar + 1;
    }
}

console.log(`\nTotal de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`);