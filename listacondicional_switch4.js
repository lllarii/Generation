const leia = require('readline-sync')
let operacao;
let valor, saldo, novoSaldo;

console.log("** Exercício 8 - Laço Condicional Switch **");
console.log("\nCAIXA 24H");

saldo = 1000.00

console.log("\n*MENU*");
console.log("1- Saldo");
console.log("2- Saque");
console.log("3- Depósito");

operacao = leia.questionInt("O que deseja fazer? ");

if ((operacao > 3) || (operacao < 1))
{
    console.log("Operação inválida! Tente novamente.");
    return
}

if ((operacao == 2) || (operacao == 3))
{
    valor = leia.questionFloat("Digite o valor: ");
}

switch (operacao)
{
    case 1:
        console.log("\nOperação - Saldo");
        console.log("O valor do saldo é: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(saldo) +".");
    break;
    case 2:
        console.log("\nOperação - Saque");
        if (valor > saldo)
        {
            console.log("Saldo insuficiente!");
        }
        else
        {
            console.log("Saque realizado com sucesso.");
            novoSaldo = (saldo - valor);
            console.log("O saldo atual é: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSaldo) +".");
        }
    break;
    case 3:
        console.log("\nOperação - Depósito");
            console.log("Depósito realizado com sucesso!");
            novoSaldo = (saldo + valor);
            console.log("O saldo atual é: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSaldo) +".");
    break;
}