const leia = require('readline-sync')
let idade, jovens, adultos;

console.log("** Exercício 3 - Laço de Repetição WHILE **");
//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 

console.log("\nCONTADOR DE PESSOAS")
console.log("\nCOMO FUNCIONA? Digite a idade de cada integrante do grupo de pessoas e descubra quantas tem menos de 21 anos ou mais de 50 anos!")
console.log("*OBS.: Para encerrar a contagem, digite um número negativo.");

idade = 1
jovens = 0
adultos = 0

while (idade>=0)
{
    idade = leia.questionInt("\nDigite uma idade: ");
    if ((idade < 21) && (idade >=0))
    {
        jovens = jovens + 1
    }

    if (idade > 50)
    {
        adultos = adultos + 1
    }    
}

if (idade < 0)
{
    console.log(`\nTotal de pessoas menores de 21 anos: ${jovens}`);
    console.log(`\nTotal de pessoas maiores de 50 anos: ${adultos}`);
}