const leia = require('readline-sync');
let nota1, nota2, nota3, nota4, media;
let nome

console.log("*** SITUAÇÃO DA PESSOA ESTUDANTE ***");
nome = leia.question("\nDigite o seu nome: ");
console.log("\nOlá, "+ nome +".");
nota1 = leia.questionFloat("\nPor favor, digite a primeira nota: ");
nota2 = leia.questionFloat("\nPor favor, digite a segunda nota: ");
nota3 = leia.questionFloat("\nPor favor, digite a terceira nota: ");
nota4 = leia.questionFloat("\nPor favor, digite a quarta nota: ");
media = ((nota1 + nota2 + nota3 + nota4)/4);

console.log("\n" + nome +", considerando as suas notas, a sua média final é: " + media.toFixed(1));