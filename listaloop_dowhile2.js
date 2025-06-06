const leia = require('readline-sync')
let numero, soma, lista, media;

/**
Escreva um algoritmo, que leia números inteiros via teclado, até que o número
zero seja digitado. Ao final, mostre na tela a média de todos os números
digitados, que sejam múltiplos de 3.
 */

console.log("** Exercício 6 - Laço de Repetição DO... WHILE **");
console.log("\nMÉDIA DE MÚLTIPLOS")
console.log("\nCOMO FUNCIONA? Digite números e descubra a média de todos que são múltiplos de 3!")
console.log("*OBS.: Para encerrar a contagem, digite 0.");


soma = 0
lista = 0

do
{
    numero = leia.questionInt("\nDigite um numero: ");
    if (numero %3 === 0)
    {
        soma = soma + numero;
        if (numero != 0){
            lista = lista + 1;}
    } 
} while (numero!=0)

media = soma/lista

if (lista === 0)
{
    console.log("Você não digitou números múltiplos de três!");
}
else
{
    console.log(`\nA média dos números multiplos de 3 é: ${media}`);
}