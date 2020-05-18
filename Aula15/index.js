let num1 = 1.098765456500; //number
let num2 = 2.6; //number

//console.log(num1.toString()+num2); //isso não faz com que o num1 tenha seu tipo alterado
//console.log(typeof num1);

//num1 = num1.toString(); //isso faz com que o tipo de num1 seja alterado
//console.log(typeof num1);

//console.log(num1.toString(2));// o toString tbm é capaz de transformar um número em binário
console.log(num1.toFixed(2));//essa função serve para limitar o número de casas decimais 
//OBS: quando ultilizamos essa notação com o ponto não estamos alterando o valor da variável que foi declarada
//estamos apenas alterando o modo como ela será exibida para o usuário

console.log(Number.isInteger(num1)); // essa função retorna true se caso o num1 for um inteiro

let temp = num1 * 'Olá';
//console.log(temp); //O resultado dessa conta seria um NaN
console.log(Number.isNaN(temp)); //serve para saber onde ocorreu o NaN

//PADRÃO QUE O JAVASCRIP SEGUE PARA PRECISÃO DE NÚMEROS
//IEEE 754-2008

let numero1 = 0.1;
let numero2 = 0.7;
//console.log(numero1+numero2);//o resultado dessa conta deveria ser 0.8, mas devido uma imprecição do
//JavaCrip acaba tendo uma diferença, porém não se torna relevante devido ser extremamente pequena
numero1 += numero2; //numero1 = numero1+numero2
//console.log(numero1);//gera o mesmo resultado com a imprecição
numero1 = parseFloat(numero1.toFixed(2));//para resolver o problema da imprecição
//numero1 = ((numero1 * 100) + (numero2 * 100))/100; //também poderia resolver de forma matemática
console.log(numero1);