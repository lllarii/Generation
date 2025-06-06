const leia = require('readline-sync')
let tipo, grupo, alimentacao
let osso
//Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama.

console.log("** Exercício 4 - Laço Condicional IF **");
console.log("\n ZOO BUSCA");
console.log("ATENÇÃO: Escreva as opções EXATAMENTE como são mostradas.");
console.log("A grafia incorreta pode trazer resultados imprecisos.");

osso = leia.keyInYNStrict("\nO animal e vertebrado? ");

if (osso == true)
{
    tipo = "vertebrado"
    grupo = leia.question("O animal pertence ao grupo de AVES ou MAMIFEROS? ");
    grupo.toLowerCase();
    if((grupo == "ave")||(grupo == "aves"))
    {
        alimentacao = leia.question("O animal e CARNIVORO ou ONIVORO? ");
        alimentacao.toLowerCase();
        if(alimentacao == "carnivoro")
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a ÁGUIA.`)
        }
        else
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a POMBA.`)
        }
    }
    else
    {
        alimentacao = leia.question("O animal e HERBIVORO ou ONIVORO? ");
        alimentacao.toLowerCase();
        if(alimentacao == "onivoro")
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é o HOMEM.`)
        }
        else
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a VACA.`)
        }
    }
}
else
{
    tipo = "invertebrado"
    grupo = leia.question("O animal pertence ao grupo de INSETOS ou ANELIDEOS? ");
    grupo.toLowerCase();
    if((grupo == "inseto")||(grupo == "insetos"))
    {
        alimentacao = leia.question("O animal e HEMATOFAGO ou HERBIVORO? ");
        alimentacao.toLowerCase();
        if(alimentacao == "hematofago")
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a PULGA.`)
        }
        else
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a LAGARTA.`)
        }
    }
    else
    {
        alimentacao = leia.question("O animal e HEMATOFAGO ou ONIVORO? ");
        alimentacao.toLowerCase();
        if(alimentacao == "hematofago")
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é o SANGUESSUGA.`)
        }
        else
        {
            console.log(`Com base nas características de tipo: ${tipo}, grupo: ${grupo} e alimentação: ${alimentacao}, o animal escolhido é a MINHOCA.`)
        }
    }
}

