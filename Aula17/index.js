const alunos = ['Luiz','Maria','João']; 

alunos[0] = 'Eduardo';//editando o nome do primeiro aluno
alunos[3] = 'Luiza'; //adicioando mais um aluno

console.log(alunos[0]);//para vê a primeiro nome do array
alunos[alunos.length] = 'Isabela';//outro modo de adicionar alunos
alunos[alunos.length] = 'Jegirlana';

alunos.push('Otávio');//função que serve para adicionar um nome do final do array
alunos.unshift('Elisa');//função que adiciona um nome no início do array

alunos.pop();//função que remove elementos do final do array
alunos.shift();//função que remove elementos do início do array

delete alunos[2];//apaga o elemento dessa posição, mas não altera os outros índices 
console.log(alunos);

console.log(alunos.length);
console.log(alunos);