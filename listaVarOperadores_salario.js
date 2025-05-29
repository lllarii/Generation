const leia = require('readline-sync');
let nome;
let salario, abono, novoSalario;

console.log("*** CALCULADORA DO FUNCIONÁRIO ***");
nome = leia.question("\nDigite o seu nome: ");
console.log("\nOlá, "+ nome +".");
salario = leia.questionInt("\nPor favor, digite o seu salario: ");
abono = leia.questionInt("\nAgora, digite o valor do abono: ");
novoSalario = (salario + abono);

console.log("\n" + nome +", o valor do seu novo salário é: "+ new Intl.NumberFormat('pt-BR', {
     style: 'currency',
     currency: 'BRL',
   }).format(novoSalario) +".");