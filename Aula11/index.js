//Operadores Aritméticos

//ordem de precedência 
//()
// **
// * / %
//  + -

// + adição/concatenação
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

const num3 = '5';
const num4 = 13;
console.log(num3 + num4);

//subtração
const num5 = 5;
const num6 = 10;
console.log(num5 - num6);

//exponenciação
const num7 = 1;
const num8 = 10;
console.log(num7 ** num8);

//resto da divisão
const num9 = 10;
const num10 = 3;
console.log(num9 % num10);

//incrementação e decrementação
let contador = 1;
contador++;
console.log(contador);
//obs: não se usa esse operador em const
let contador1 = 1;
contador1--;
console.log(contador1);

//operadores de atribuição
let contador2 = 2;
contador2 **=10;
console.log(contador2);

//para converter um tipo
const num11 = 10;
const num12 = parseInt('3');
console.log(num11 + num12);
//ou ele pode se virar usando number
const num13 = 10;
const num14 = Number('3.3');
console.log(num13 + num14);
//quando ele não consegue realizar essa conversão ele retorna NaN

