const leia = require('readline-sync')
let numero1, numero2, conta;

console.log("** Exercício 7 - Laço Condicional Switch **");
console.log("\nCALCULADORA RÁPIDA")

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

console.log("\n*MENU*");
console.log("1- Soma");
console.log("2- Subtração");
console.log("3- Multiplicação");
console.log("4- Divisão");

conta = leia.questionInt("Digite o codigo correspondente ao calculo que deseja fazer: ");

if ((conta > 4) || (conta < 1))
{
    console.log("Operação inválida! Tente novamente.");
    return
}

switch (conta)
{
    case 1:
        let soma = (numero1 + numero2);
        console.log(`A soma de ${numero1} e ${numero2} é ${soma}`);
    break;
    case 2:
        let subtracao = (numero1 - numero2);
        console.log(`A subtração de ${numero1} e ${numero2} é ${subtracao}`);
    break;
    case 3:
        let multiplicacao = (numero1 * numero2);
        console.log(`O produto da multiplicação entre ${numero1} e ${numero2} é ${multiplicacao}`);
    break;
    case 4:
        let divisao = (numero1 / numero2);
        console.log(`A divisão entre ${numero1} e ${numero2} é ${divisao}`);
    break;
}