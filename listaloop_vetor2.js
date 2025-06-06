const leia = require('readline-sync');
let numeros = [];
let soma, media, i
console.log("** Exercício 8 - Vetores **");

console.log("\n CRIE A SUA LISTA!");

/** 
Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em
seguida, mostre na tela:
● Todos os elementos dos índices ímpares do vetor
● Todos os elementos do vetor que são números pares
● A Soma de todos os elementos do vetor
● A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
*/

soma = 0

for (i = 0; i < 10; i++)
{
    numeros[i] = leia.questionInt("\nDigite um numero: ");
    soma = soma + numeros[i];
}

for (i = 1; i <= numeros.length; i+=2 )
{
    console.log(`O elemento armazenado no índice ${i} do vetor é o número: ${numeros[i]}`);
}

for (i = 0; i < 10; i++)
{
    if (numeros[i] % 2 === 0)
    {
        console.log(`O elemento armazenado no índice ${i} do vetor é o número: ${numeros[i]}, que é par`);
    }
}

console.log(`\nA soma de todos os elementos do vetor é: ${soma}`);

media = soma/10

console.log(`A média de todos os elementos do vetor é: ${media.toFixed(2)}`);

console.log(`\nAgradecemos por utilizar o nosso mecanismo!`);