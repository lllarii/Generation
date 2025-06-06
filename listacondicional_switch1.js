const leia = require('readline-sync')
let item, quant;
let valor;
console.log("** Exercício 5 - Laço Condicional Switch **");
item = leia.questionInt("\n Digite o codigo do item comprado: ");
if ((item > 6) || (item < 1))
{
    console.log("Digite um número válido.");
    return
}
quant = leia.questionInt("\n Digite a quantidade comprada: ");

switch (item)
{
    case 1:
        valor = (quant * 10)
        console.log("\nProduto: Cachorro Quente");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
    case 2:
        valor = (quant * 15)
        console.log("\nProduto: X-Salada");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
    case 3:
        valor = (quant * 18)
        console.log("\nProduto: X-Bacon");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
    case 4:
        valor = (quant * 12)
        console.log("\nProduto: Bauru");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
    case 5:
        valor = (quant * 8)
        console.log("\nProduto: Refrigerante");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
    case 6:
        valor = (quant * 13)
        console.log("\nProduto: Suco de laranja");
        console.log("\nValor total: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor) +".");
    break;
}


