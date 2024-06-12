// Exemplos de Funções Callback

const frutas = ["Maçã", "Banana", "Pera", "Uva", "Melancia"];

const notas = [10, 5, 8, 7, 9];

// for(let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for(let i = 0; i < notas.length; i++) {
//   notas[i] = notas[i] + 1;
//   console.log(notas[i]);
// }

// For Each
function somaNotas(notasArray) {
  let soma = [];
  notasArray.forEach(function (nota, index) {
    soma[index] = nota + 1;
  });

  return soma;
}

console.log(somaNotas(notas));

// Map
somaNotas = notas.map(function (nota) {
  return nota + 1;
});
console.log(notas);
console.log(somaNotas);

// Filter
const numeros = [ 1, 2, 3, 4, 5 ]
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);

// Reduce
const numeros2 = [ 1, 2, 3, 4, 5 ]
const soma = numeros2.reduce((acumulador, numero) => {
  let somaInterna = acumulador + numero;
  console.log('estou no reduce', somaInterna);
  return somaInterna;
}, 0);


