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
// Função Seta (Arrow Function)