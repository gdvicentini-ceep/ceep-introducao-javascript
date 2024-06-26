// Tratamento de JSON
// JSON é um formato de dados que é muito utilizado para troca de informações entre sistemas

// Objeto de exemplo
console.log("Variável recebendo objeto:\n")
let funcionario = {
  nome: "João",
  idade: 34,
  cargo: "Desenvolvedor",
  salario: 5000,
  linguagens: ["Java", "Python", "JavaScript"]
}
console.log("Exemplo do Objeto Inicial:\n")
console.log(funcionario)


let funcionarioJSON = JSON.stringify(funcionario) // Converter o objeto para JSON
console.log("-----------------")
console.log("Exemplo em JSON:\n")
console.log(funcionarioJSON)


let funcionarioObj = JSON.parse(funcionarioJSON) // Converter o JSON para objeto
console.log("-----------------")
console.log("Exemplo do Objeto Convertido:\n")
console.log(funcionarioObj)

// Exemplo de uso do JSON
let pessoa = {
  "nome": "Maria",
  "sobrenome": "Silva",
  "idade": 30,
  "telefone": "(11) 99999-9999"
}

console.log("-----------------")
console.log("Variável recebendo JSON:\n")
console.log("Exemplo de Objeto:\n")

console.log(pessoa.nome)

let pessoaJSON = JSON.stringify(pessoa) // Converter o objeto para JSON
console.log("-----------------")
console.log("Exemplo em JSON:\n")
console.log(pessoaJSON)

let pessoaObj = JSON.parse(pessoaJSON) // Converter o JSON para objeto
console.log("-----------------")
console.log("Exemplo do Objeto Convertido:\n")
console.log(pessoaObj)

// Exemplos de manipulação de JSON e Objetos
const cliente = require('./cliente.json') // A função require importa um arquivo de informações para a variável. Neste caso está importando o JSON de Cliente
const clientes = require('./clientesArray.json')

console.log("-----------------")
// Função find:

let encontrarCliente = clientes.find((pessoa) => {
  return pessoa.nome === "João"
})
console.log(`variável encontrarCliente:\n ${encontrarCliente}`)