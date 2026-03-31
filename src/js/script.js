// Declraçoes e Variaveis

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

// ternaria

let salario=100;
let resultado = salario ==100? "Salario Certo": "salario Errado"
console.log(resultado)

let usuario="fiap";
let userlogado= usuario ==="fiap"?"Logado com sucesso":"Usuário inválido"
console.log(userlogado);

function verificarparimpar(numero){
    return numero % 2 === 0 ?"PAR":"IMPAR";
}
console.log(verificarparimpar(10))