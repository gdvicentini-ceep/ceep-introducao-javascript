// Declarações de variáveis no Javascript
var nome = 'Lucas'; // não é recomendado
let anoNascimento = 2006; // recomendado
const anoAtual = 2024;

// Exemplos de leitura via console
// console.log()
console.log(nome);
console.log(anoNascimento);
console.log(anoAtual);

anoNascimento = 1994;
console.log(anoNascimento);

// Exemplo de console.log com concatenação
console.log('Meu nome é ' + nome + ', nasci em ' + anoNascimento + ' e estamos em ' + anoAtual);

console.log('Meu nome é ', nome, ', nasci em ', anoNascimento, ' e estamos em ', anoAtual);

// Tipos de dados primitivos no Javascript
console.log('--------------------');
console.log('Tipos de dados primitivos no Javascript.');

// String:
console.log('--------------------');
console.log('Tipo String:');
let veiculo = "carro"; // definição com aspas duplas
let marcaCarro = 'Ford'; // definição com aspas simples
let modeloCarro = `Ranger`; // definição com template literals

console.log(typeof veiculo);
console.log(typeof marcaCarro);
console.log(typeof modeloCarro);

// Exemplo de utilização com template literals
console.log(`Meu nome é ${nome} nasci em ${anoNascimento} e estamos em ${anoAtual}`);

// Number:
console.log('--------------------');
console.log('Tipo Number:');

let numeroPortasCarro = 4;
console.log(typeof numeroPortasCarro);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// Boolean:
console.log('--------------------');
console.log('Tipo Boolean:');

let portaAberta = true;
let torneiraLigada = false;

console.log(typeof portaAberta);
console.log(typeof torneiraLigada);

// Empty values:
console.log('--------------------');
console.log('Empty Values:');
console.log('Tipo Null:');
let testeNull = null;

console.log(typeof testeNull);
console.log(testeNull);

console.log('Tipo Undefined:');
let testeUndefined;

console.log(typeof testeUndefined);
console.log(testeUndefined);

if(testeUndefined == undefined) {
    console.log('teste com undefined');
}

// Exemplo de conversão automática do Javascript
console.log('--------------------');
console.log('Conversões automáticas no Javascript');
console.log('Conversão 1: ', '5' + 3); // conversão automática em versões mais atuais do Javascript
console.log('Conversão 2: ', 5 * testeNull);
console.log('Conversão 3: ', 'cinco' * 'quatro'); // NaN

