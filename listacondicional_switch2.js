const leia = require('readline-sync')
let nome;
let salario, novoSalario;
let cargo;
console.log("** Exercício 2 - Laço Condicional Switch **");
nome = leia.question("\nPor favor, digite o nome do colaborador: ")
cargo = leia.questionInt("\nAgora digite o codigo do cargo do colaborador: ");
if ((cargo > 6) || (cargo < 1))
{
    console.log("Digite um código válido.");
    return
}
salario = leia.questionFloat("\nDigite o salario do colaborador: ");

switch (cargo)
{
    case 1:
        novoSalario = (salario + ((10 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Gerente");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
    case 2:
        novoSalario = (salario + ((7 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Vendedor");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
    case 3:
        novoSalario = (salario + ((9 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Supervisor");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
    case 4:
        novoSalario = (salario + ((6 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Motorista");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
    case 5:
        novoSalario = (salario + ((5 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Estoquista");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
    case 6:
        novoSalario = (salario + ((8 * salario)/100))
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Técnico de TI");
        console.log("\nSalário reajustado: "+ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(novoSalario) +".");
    break;
}