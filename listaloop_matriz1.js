const leia = require('readline-sync');
let soma1, soma2;
let controle;
console.log("** Exercício 9 - Matrizes **");

console.log("\n CRIE A SUA MATRIZ");

/** 
Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida,
mostre na tela:
● Todos os elementos da Diagonal Principal
● Todos os elementos da Diagonal Secundária
● A Soma de todos os elementos da Diagonal Principal
● A Soma de todos os elementos da Diagonal Secundária
*/

let matriz = new Array(3);
for (let iL = 0; iL < matriz.length; iL++)
{
    matriz[iL] = Array(3);
}

do{
for (let iL = 0; iL < matriz.length; iL++)
{
    for (let iC = 0; iC < matriz.length; iC++)
    {
        matriz[iL][iC] = leia.questionInt(`Digite o numero do elemento [${iL}][${iC}]: `);
    }
}

console.log("\n*MATRIZ*");
console.table(matriz);

console.log("\nElementos da Diagonal Principal:");
console.log(`${matriz[0][0]}, ${matriz[1][1]} e ${matriz[2][2]}`);

console.log("\nElementos da Diagonal Secundária:");
console.log(`${matriz[0][2]}, ${matriz[1][1]} e ${matriz[2][0]}`);

console.log("\nSoma dos Elementos da Diagonal Principal:");
soma1 = (matriz[1][1] + matriz[2][2] + matriz[0][0]);
console.log(soma1)

console.log("\nSoma dos Elementos da Diagonal Secundária:");
soma2 = (matriz[1][1] + matriz[0][2] + matriz[2][0]);
console.log(soma2)

controle = leia.keyInYNStrict("\nDeseja construir uma nova matriz? ");
} while (controle == true)

console.log(`\nAgradecemos por utilizar o nosso mecanismo!`);