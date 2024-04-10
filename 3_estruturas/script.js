// Exemplos de Estruturas em JavaScript

// Estrutura Condicional (IF - ELSE)
let idade = 6

if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// IF - ELSE encadeado

if(idade < 16) {
    console.log("Você não pode votar");
} else if(idade >= 16 && idade < 18) {
    console.log("Voto opcional");
} else if(idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Voto opcional");
}

// Estrutura de Escolha (SWITCH - CASE)
console.log("-----------------------------");
switch (true) {
    case idade < 18:
        console.log("Você é menor de idade");
        break;

    default:
        console.log("Você é maior de idade");
        break;
}

switch(true) {
    case idade < 16:
        console.log("Você não pode votar");
        break;
    
    case idade >= 16 && idade < 18:
        console.log("Voto opcional");
        break;

    case idade >= 18 && idade < 70:
        console.log("Voto obrigatório");
        break;

    case idade > 70:
        console.log("Voto opcional");
        break;

    default:
        console.log("idade não foi informado");
        break;
}

console.log("-------------------");
let cor = prompt("Informe uma cor de CD para saber o seu valor.");

switch(cor) {
    case "verde":
        console.log("O valor do cd verde é R$ 10.00");
        break;

    case "azul":
        console.log("O valor do cd azul é R$ 20.00");
        break;

    case "amarelo":
        console.log("O valor do cd amarelo é R$ 30.00");
        break;

    case "vermelho":
        console.log("O valor do cd vermelho é R$ 40.00");
        break;

    default:
        console.log("A cor informada é inválida");
        break;

}
