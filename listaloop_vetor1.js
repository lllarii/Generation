const leia = require('readline-sync');
let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let busca
let continua
console.log("** Exercício 4 - Vetores **");

/** 
Dado um vetor contendo 10 números inteiros não ordenados e não repetidos,
construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um
número e o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida
na tela. 
*/
do
{
    busca = leia.questionInt ("\nDigite o numero que voce deseja encontrar: ");

    if (numeros.indexOf(busca) >= 0)
    {
        console.log(`\nO número ${busca} está localizado na posição: ${numeros.indexOf(busca)}`);
    }
    else
    {
        console.log(`\nO número ${busca} não foi encontrado.`);
    }

    continua = leia.keyInYNStrict("\nDeseja realizar uma nova busca?");
} while (continua==true)


console.log(`\nAgradecemos por utilizar o nosso mecanismo!`);