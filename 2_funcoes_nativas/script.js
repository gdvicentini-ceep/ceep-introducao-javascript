// Exemplo de Funções Built-in (Funções nativas)
// Prompt:
let nome = prompt('Informe o seu nome:');

// Alert:
let mensagem = `Seja bem vindo ${nome}`;
alert(mensagem)

/* Math.x:
 * 
 * Tipos de Math.x:
 * Math.max();
 * Math.min();
 * Math.random();
 * Math.pow();
 * Math.sqrt();
 * etc ...
 * 
*/
let maiorNumero = Math.max(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); // Mostra o maior valor
let menorNumero = Math.min(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); // Mostra o menor valor
let numeroAleatorio = Math.random() * 100; // Math.random() cria um número 0 e 1, ao multiplicar por 10 o intervalo fica de 0 a 10 e se multiplicar por 100 o intervalo fica de 0 a 100
let numeroElevado = Math.pow(2, 3); // vai realizar calculo de número elevado. Nesse caso: 2 elevado 3 que é igual a 8
let arredondarParaBaixo = Math.floor(numeroAleatorio); // Math.floor vai arredondar para baixo
let arredondarParaCima = Math.ceil(numeroAleatorio); // Math.ceil vai arredondar para cima

// Console.log:
console.log(nome);
console.log(`Maior número: ${maiorNumero}`);
console.log(`Menor número: ${menorNumero}`);
console.log(`Numero aleatório: ${numeroAleatorio}`);
console.log(`Numero elevado: ${numeroElevado}`);
console.log(`Numero aleatório arredondado para baixo: ${arredondarParaBaixo}`);
console.log(`Numero aleatório arredondado para cima: ${arredondarParaCima}`);