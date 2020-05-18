/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.45678988
Luiz Otávio nasceu em 1990.
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;

let imc;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = 2020-idade;
 
console.log(imc);
console.log(anoNascimento);

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg tem',altura,'de altura e seu IMC é de',imc,
nome,sobrenome,'nasceu em',anoNascimento);

//usando templante String
console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg tem',altura,'de altura e seu IMC é de',imc,
`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
