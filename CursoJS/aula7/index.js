// Não podemos ciar constantes com palavras reservadas
// Constantes precisam ter nomes significativos  
// Não pode começar o nome de uma constante com um número
// Não podem contr espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não utilize var, utilize const

const nome = "João";
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero + segundoNumero))