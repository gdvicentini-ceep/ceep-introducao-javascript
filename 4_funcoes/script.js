//console.log("hello World");

let nome = "João";
let idade = 18;
let anoAtual = 2024;

coletarAnoNascimento(nome, idade, anoAtual);
coletarAnoNascimento("Mauricio", 15, 2024);
coletarAnoNascimento("Claudio", 23, 2024);

// Função convencional ou nomeada
function coletarAnoNascimento(nomeRecebido, idadeRecebida, anoAtualRecebido) {
  let anoNascimento = anoAtualRecebido - idadeRecebida;
  console.log(`O ${nomeRecebido} nasceu em ${anoNascimento} !!`);
}

function somarValores(a, b) {
  return a + b
}

console.log("------------------------------")
// Função anônima
let soma = function (a, b) {
  return a + b
}

let resultadoSoma = somarValores(5, 10)

console.log("Exemplo com função anônima: ", soma(15, 20))
console.log("Exemplo com função convencional: ", resultadoSoma)

console.log("------------------------------")
// Função Seta (Arrow Function)  =>
let parOuImpar = (numero) => {
  if(numero % 2 == 0) {
    console.log(`O número ${numero} é par`)
  } else {
    console.log(`O número ${numero} é impar`)
  }
}

parOuImpar(10)
parOuImpar(15)
parOuImpar(4)

let multiplicar = numero => numero * numero

let multiplicar2 = (numero) => {
  return numero * numero
}

console.log(`Arrow function reduzida: ${multiplicar(5)}`)
console.log(`Arrow function convencional: ${ multiplicar2(5)}`)

console.log("-----------------------")
// Funções com Argumentos Opcionais
function nomeComIdade(nome, idade) {
  if(idade === undefined) {
    console.log(`Seu nome é ${nome}`)
  } else {
    console.log(`Seu nome é ${nome} e você tem ${idade} anos`)
  }
}

nomeComIdade("João", 16)
nomeComIdade("Carlos")

console.log("-----------------------")
// Funções com Valores Padrão (Default)
function repetirFrase(frase, numeroRepeticao=2) {
  for(let i = 0; i < numeroRepeticao; i++) {
    console.log(frase + " " + (i+1))
  }
}

repetirFrase("Texto", 5);
repetirFrase("Texto");