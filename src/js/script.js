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

//
