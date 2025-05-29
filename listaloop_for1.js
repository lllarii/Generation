const leia = require('readline-sync')
let n1, n2;
console.log("** Exercício 1 - Laço de Repetição FOR **");
//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.

n1 = leia.questionInt("\nDigite o primeiro numero do intervalo: ");
n2 = leia.questionInt("\nDigite o segundo numero do intervalo (ALERTA: ele deve ser maior do que o primeiro numero): ");

if (n2 < n1)
{
    console.log("Intervalo inválido!");
    return
}

for (let i = n1; i <= n2; i++)
{
    if ((i %3 == 0) && (i %5 == 0))
    {
    console.log(`${i} é múltiplo de 3 e 5`);
    }
}

