// Arrays no JS

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // Array de números
let nomes = ["João", "Maria", "Carlos", "Ana", "Pedro"] // Array de strings

let informacoes = [1, "João", 2, "Maria", 3, "Carlos"] // Array de tipos diferentes

let arrayEncadeado = [ 1, "João", [1, 2, 3], {nome: "Maria", idade: 20} ] // Array encadeado

// Acessar elemento do array
console.log(numeros)
//console.log(nomes[3])
//console.log(informacoes[2])
//console.log(arrayEncadeado[2])

// Adicionar elementos ao array
// Método push() - Adiciona um elemento ao final do array
numeros.push(15)
console.log(numeros)

// Método unshift() - Adiciona um elemento ao início do array

numeros.unshift(0)
console.log(numeros)

// Remover elementos do array
// Método pop() - Remove o último elemento do array
console.log(nomes)
nomes.pop()
console.log(nomes)

// Método shift() - Remove o primeiro elemento do array

console.log(informacoes)
informacoes.shift()
console.log(informacoes)

