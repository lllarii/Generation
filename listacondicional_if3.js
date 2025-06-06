const leia = require('readline-sync')
let nome
let idade
let doador


/**
Para doar sangue é necessário ter entre 18 e 69 anos. 
Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação.
Escreva um Algoritmo que leia via teclado o nome do doador (string), 
a idade (número inteiro) dodoador 
e se já fez outras doações de sangue (boolean). 
Conforme as Regras para a doação de sangue citadas acima, 
mostre na tela se o doador está Apto ou Não Apto para doar sangue.  */

console.log("** Exercício 3 - Laço Condicional IF **");
console.log("\n CADASTRO | HEMOCENTRO");

nome = leia.question("\n Digite o nome do doador: ");
idade = leia.questionInt("\n Digite a idade do doador: ");
doador = leia.keyInYNStrict("\n Primeira vez que doa sangue? ");

if((idade >= 18) && (idade <=69))
{
    if(idade >=60)
    {
        if(doador == false)
        {
            console.log(`\n${nome} está apto(a) para doar sangue!`);
        }
        else
        {
            console.log(`\n${nome} não está apto(a) para doar sangue!`);
        }
    }
    else
    {
        console.log(`\n${nome} está apto(a) para doar sangue!`);
    }
}
else
{
    console.log(`\n${nome} não está apto(a) para doar sangue!`);
}
