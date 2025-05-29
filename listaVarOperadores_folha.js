const leia = require('readline-sync');
let nome;
let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;
   const dataAtual = new Date();
   let formatacao = {
    month: "long",
    year: "numeric",
   };

   console.log("*** FOLHA DE PAGAMENTO ***");
   console.log(dataAtual.toLocaleDateString("pt-BR", formatacao));

  nome = leia.question("\nDigite o seu nome: ");
console.log("\nOlá, "+ nome +".");
salarioBruto = leia.questionInt("\nPor favor, digite o valor do salario: ");
adicionalNoturno = leia.questionInt("\nDigite o valor do adicional noturno: ");
horasExtras = leia.questionInt("\nDigite a quantidade de horas extras: ");
descontos = leia.questionInt("\nDigite o valor dos descontos: ");

salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos);

console.log("\n" + nome +", o valor do salário líquido é: "+ new Intl.NumberFormat('pt-BR', {
     style: 'currency',
     currency: 'BRL',
   }).format(salarioLiquido) +".");