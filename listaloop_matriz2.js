const leia = require('readline-sync');
let soma = new Array(10);
let media = new Array(10);

console.log("** Exercício 10 - Matrizes **");

console.log("\nGRADE DE NOTAS");

/** 
Elabore um algoritmo que leia as notas de uma turma com 10 participantes, dos 4
bimestres de um ano. As 4 notas de cada participante serão armazenadas em uma
linha de uma matriz de números reais, logo cada linha da matriz representará as notas
de um participante. Em um vetor de números reais, armazene as médias de cada
participante e exiba as médias de cada um na tela.
*/

let matriz = new Array(10);
for (let iL = 0; iL < matriz.length; iL++)
{
    matriz[iL] = Array(4);
}

for (let iL = 0; iL < 10; iL++)
{
    for (let iC = 0; iC < 4; iC++)
    {
        matriz[iL][iC] = leia.questionFloat(`Digite a nota da ${iL+1} pessoa no ${iC+1} bimestre: `);
    }
}

console.log("\n*MATRIZ*");
console.table(matriz);

for(let i = 0; i < 10; i++)
{
    soma[i] = 0
    for (let iC = 0; iC < 4; iC++)
    {
         soma[i] = soma[i] + matriz[i][iC]
    }
media[i] = (soma[i]/4).toFixed(1);
}

console.log("\nVETOR DE MÉDIAS")

console.table([media]);

// console.log(media)

// for(let i = 0; i <10; i++)
// {
//     console.log(media[i].toFixed(1));
// }
