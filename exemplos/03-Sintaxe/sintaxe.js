// Comentário de 1 linha
/*Bloco de comentário (Shift + ALT + a) */

// alert("Olá, mundo!");

console.log("Olá, mundo!"); // Exibido no: Inspecionar -> Console
document.write("Olá, mundo!");

/* Variáveis
Palavras-chave: var, let e const

var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco
*/

const nome = "Jules Bianchi"; // Constante
let ano = 2023; // variável de escopo local
var curso = "Técnico em Desenvolvimento de sistemas"; // Variável global

// Recuperando os valores
document.write('<h2 style="color: blue;">Recuperando valores e concatenação</h2><br>');
// console.log(nome); 


// 1ª Digitação (Aqui)

document.write ("<strong>Meu nome é: </strong>" +nome+ "<br>")
document.write ("<strong>Estamos no ano de:</strong>" +ano+ "<br>")
document.write ("<strong>Meu Curso é:</strong>" +curso+ "<br>")

// Concatenação Template literal (crase)

document.write (`Eu sou o: <strong>${nome}</strong> e em: <strong>${ano}</strong> estou cursando: <strong>${curso}</strong> <br>`)


document.write("<br>__________________________________________________________________<br>");

// ______________________________________________________________________________________



// String literal/ Template String (Usando a crase)
document.write('<h2 style="color: blue;">String literal/ Template String (Usando a crase)</h2><br>');

// 2ª Digitação (Aqui)

document.write (`Eu sou o: <strong>${nome}</strong> e em: <strong>${ano}</strong> estou cursando: <strong>${curso}</strong> <br>`)

document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________



// Operadores matemáticos
document.write('<h2 style="color: blue;">Operadores matemáticos</h2><br>');

/* Operadores matemáticos

+ adição
- subtração
/ divisão
* multiplicação

*/

let produto = 'TV Led';
let preco = 6500;
let preco_atualizado = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

let quantidade = 3;
let total = preco * quantidade;

let total_atualizado = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


// 3ª Digitação (Aqui)

document.write(`A ${produto}; Custa ${preco_atualizado}; Temos ${quantidade} no estoque e tudo sai por: ${total_atualizado}`)