const leia = require('readline-sync')
let numero;
console.log("** Exercício 2 - Laço Condicional IF **");
numero = leia.questionInt("\nPor favor, digite um numero inteiro: ");

if (numero %2 == 0)
{
    if (numero > 0)
    {
        console.log(`\nO número ${numero} é par e positivo!`);
    }
    else if (numero < 0)
    {
        console.log(`\nO número ${numero} é par e negativo!`);
    }
    else
    {
        console.log(`\nO número ${numero} é par e neutro!`);
    }
}
else
{
    if (numero > 0)
    {
        console.log(`\nO número ${numero} é impar e positivo!`);
    }
    else
    {
        console.log(`\nO número ${numero} é impar e negativo!`);
    }
}
