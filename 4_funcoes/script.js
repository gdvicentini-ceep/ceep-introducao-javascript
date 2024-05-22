//console.log("hello World");

let nome = "João";
let idade = 18;
let anoAtual = 2024;

coletarAnoNascimento(nome, idade, anoAtual);
coletarAnoNascimento("Mauricio", 15, 2024);
coletarAnoNascimento("Claudio", 23, 2024);

function coletarAnoNascimento(nomeRecebido, idadeRecebida, anoAtualRecebido) {
  let anoNascimento = anoAtualRecebido - idadeRecebida;
  console.log(`O ${nomeRecebido} nasceu em ${anoNascimento} !!`);
}