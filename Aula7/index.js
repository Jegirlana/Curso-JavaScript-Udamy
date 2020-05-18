//Regras para criar constantes
//Não podemos criar constantes com palavras reservadas
//constantes precisam ter nomes significativos
//Não começar nome de constantes com número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não  podemos modificar o valor de uma constante

const nome = 'gigi';
console.log(nome);
//const n; isso dá erro, constantes sempre devem ser inicializadas

const primeiroNumero = '5';
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
console.log(conta);

//caso vc queira saber o tipo de um dado que não está explícito basta usar
console.log(typeof(primeiroNumero));
console.log(primeiroNumero + segundoNumero);
console.log(typeof (primeiroNumero + segundoNumero));