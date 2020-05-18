let umsString = 'Um "texto"';
//posso fazer assim tbm 
let umaString1 = "Um \"texto\""; //a barra invertida funciona como um caractere de escape
let umaString2 = 'Um \\texto'; //Se eu quiser exibir uma barra invertida eu vou ter que usar duas barras,
//caso contrário essa barra vai funcionar como um escape
console.log(umsString);
console.log(umaString2);

//Strings são indexadas, ou seja, cada caracteres possuem um índice
//para vê o elemento que está no índice 4
console.log(umaString2[3]);

//algumas funções das strings
console.log(umaString2.charAt(0)); //essa função retorna o elemento que está na posição desejada
console.log(umaString2.charCodeAt(0));//essa função retorna o inteiro que corresponde ao caractere desejado
//na tabelas ASCIIS
console.log(umaString1.concat('','do livro')); //função para concatenar strings
console.log(umaString2.indexOf('\\'));//retorna o índice que está na string desejada
console.log(umaString2.indexOf('texto',3));//retorna o índice que está na string desejada, a partir do índice 3
//se não encontrar nada vai retornar -1
console.log(umaString2.match(/[a-z]/g));//retorna todas as letras minúsculas do texto de a-z
console.log(umaString2.search(/[a-z]/));//retorna o índice apartir de onde começam as letras minúsculas
// do texto de a-z
console.log(umaString2.replace('Um', 'Outro'));//essa função substitui uma palavra por outra
console.log(umaString2.replace(/t/g, '#'));//essa função substitui todas as letras t por #
console.log(umaString2.length);//para vê o tamanho da string
console.log(umaString2.slice(4,11));//fatia uma string, ou seja, retorna uma parte da string no intervalo desejado.
console.log(umaString2.split(''));//divide a string com o caractere desejado
console.log(umaString2.split('',2));//divide a string com o caractere desejado apenas 2 vezes
//tudo isso conta na documentação do javaScrip
//que pode ser encontrada em: w3schools.com/js/ ou developer.mozila.org/pt-BR/docs/Web/JavaScript
console.log(umaString2.toUpperCase());//retorna a string toda em letras maiúsculas 
console.log(umaString2.toLowerCase());//retorna a string toda em letras minúsculas 
