/* // Declraçoes e Variaveis

// Var, Let e Const
//var x=10;
//console.log(x);
//var x=20;
//console.log(x)
// var; pode redeclarar e acessar fora do escopo
//let nao pode redeclarar e nao consegue acessar fora do escopo

// exercicio 1

const p=20;
const v=10;

let precofinal = p - v;
console.log("O valor é:", precofinal )

// exercicio 2
// Verificação de Segurança (Login e Token)
// no banco, para autorizar uma transição, precisamos que o usuário esteja logado e que o token de segurança seja válido.

const token=100;
const usuariologado=1;
const transaçaoautorizada= usuariologado === 1 && token >= 10;
console.log("Transação Autorizada com Sucesso!", transaçaoautorizada);

//ESTRUTURA CONDICIONAL
//if
if(false){
    console.log("É Verdardeiro")
}
//if//else

let nome="Fiapinho";

if(nome=="fiap"){
    console.log("nome verdadeiro")
}else{
    console.log("nome errado")
}
//if encadeado ou aninhado

let idade =18;

if(idade <= 13){
    console.log("É uma criança")
}else if(idade >13 && idade <=18){
    console.log("É um adolescente")
}else if(idade >18 && idade <=59){
    console.log("É um adulto")
}else{
    console.log("É um idoso")
}

//SWITCH CASE

let times="santos"

switch(times){
    case "santos":
        console.log("Um time idoso")
        break;
    case "são paulo":
        console.log("Time Panetone")
        break;
    case "palmeiras":
        console.log("SEM MUNDIAL")
        break;
    case "corinthians":
        console.log("Um time de tradição")
        break;
    default:
        console.log("É tão ruim quanto seleção brasileira")
        break;
}
 */
// ternaria

/* let salario=100;
let resultado = salario ==100? "Salario Certo": "salario Errado"
console.log(resultado)

let usuario="fiap";
let userlogado= usuario ==="fiap"?"Logado com sucesso":"Usuário inválido"
console.log(userlogado);

function verificarparimpar(numero){
    return numero % 2 === 0 ?"PAR":"IMPAR";
}
console.log(verificarparimpar(10)) */

//ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

/* for - Estrutura de repetição utilizada para quando sabemos previamente quantas vezes o código vai ser executado */
/* declaração, operação, incremento */
/* for(let i=1; i<=5; i++){
    console.log("Número:", i);
}
/* for para array */

/* const linguagens = ["java", "Python", "C#", "PHP"];

for( let i=0; i < linguagens.length;i++){
    console.log("Linguagem", i, ":", linguagens[i]);
}

const tecnologias =["JS", "HTML", "CSS"]

for(const tech of tecnologias){
    console.log("Estudando", tech)
}

const carros ={marca:"Volks",modelo:"Fusca",ano:1980};

for( let dados in carros){
    console.log(dados, ":", carros[dados]) */
/* }
 */
/* While - diferente do for o while não sabemos a quantidade de vezes que o código vai executar */
/* let i=1; */

/* while(i <=5){
    console.log("contagem",i)
}

let numero;
while(numero != "0"){
    /*  numero = prompt("Digite ( ou 0 para sair")); */
/* console.log("eu sei o que voce digitou: ", numero);
numero ++;
}
console.log("Fim do programa") */ 
 
/*  */
let contador = 10;
do {
    console.log("vai executar pelo b uma vez")
    contador ++;
} while(contador <= 1)

let palpite;

/* gerar um numero aleatorio entre 1 e 10 */

const sorteio =Math.floor(Math.random() * 10)+1;

do{
    palpite =parseInt(prompt("Digite um numero entre 1 e 10"));

    if(isNaN(palpite)){
        alert("saindo do jogo")
        break;
    }
    if(palpite !== sorteio){
        alert("Voce perdeu R$ 100,00")
    }
} while(palpite !== sorteio)
    if(palpite === sorteio){
        alert("Parabens, voce acertou e ganhou R$ 100,00")
    }