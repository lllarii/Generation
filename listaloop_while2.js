const leia = require('readline-sync')
let idade, genero, area;
let backend = 0, frontend = 0, fullstack = 0, mobile = 0, participantes = 0; media = 0, soma = 0;
let continuar = true

console.log("** Exercício 4 - Laço de Repetição WHILE **");
//Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. 
// Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador.
// Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre os dados na tela.

console.log("\nANÁLISE DE DADOS");

while (continuar)
{
    participantes = participantes + 1;

    do{
    idade = leia.questionInt("\nDigite a idade: ");} while (idade < 10)
    soma = soma + idade; 
    

    do{
    console.log("\n Identidade de gênero:");
    console.log("1 - Mulher Cis");
    console.log("2 - Homem Cis");
    console.log("3 - Não Binário");
    console.log("4 - Mulher Trans");
    console.log("5 - Homem Trans");
    console.log("6 - Outros");
    genero = leia.questionInt("\n Digite o numero correspondente ao genero: ")
    if ((genero < 1) || (genero > 6)){
        console.log("\nDigite um número válido!");}} while ((genero < 1) || (genero > 6))

    do{
    console.log("\n Área de Desenvolvimento:");
    console.log("1 - Backend");
    console.log("2 - Frontend");
    console.log("3 - Mobile");
    console.log("4 - FullStack");    
    area = leia.questionInt("\n Digite o numero correspondente a area em que apessoa colaboradora atua: ")} while ((area < 1) || (area > 4))

    if (area == 1)
    {
        backend = backend + 1;
    }

    if (((genero == 1) || (genero == 4)) && (area == 2))
    {
        frontend = frontend + 1
    }

    if (((genero == 2) || (genero ==5)) && (area == 3) && (idade > 40))
    {
        mobile = mobile + 1;
    }

    if ((genero == 3 ) && (area == 4) && (idade < 30))
    {
        fullstack = fullstack + 1;
    }

    continuar = leia.keyInYNStrict("\n Deseja fazer a leitura dos dados de um novo colaborador (y) ou nao (n)? ")

}

media = soma / participantes;

console.log("\nRESUMO DESTA COLETA DE DADOS:")
console.log(`\nNúmero de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`\nNúmero de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontend}`);
console.log(`\nNúmero de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${mobile}`);
console.log(`\nNúmero de Não Binários desenvolvedores FullStack menores de 30 anos: ${fullstack}`);
console.log(`\nNúmero total de pessoas que responderam à pesquisa: ${participantes}`);
console.log(`\nMédia de idade das pessoas que responderam à pesquisa: ${media.toFixed(2)}`);






