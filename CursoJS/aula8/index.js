/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.8 de altura e seu IMC é de 25.925925925924
 */

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80
let imc = peso / (altura * altura)
let anoNascimnto;
anoNascimnto = 2024 - idade;

console.log(nome, sobrenome, "tem", idade, 'anos', 'pesa', peso, 'tem', altura, 'e seu IMC é de', imc )
console.log(nome, 'nasceu em', anoNascimnto )

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} tem ${altura} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimnto}`)