/* Sintaxe 1 (Tradicional)
Função literal/anônima */

document.write('<h2 style="color: blue;">Utilizando funções</h2><br>');

let exemplo1 = function() {
    document.write("Função anônima / literal <br>");
};
// Chamando a função
exemplo1();

// ________________________________________________________________________

document.write("__________________________________________________________________<br>");


document.write('<h2 style="color: blue;">Função nomeada (Tradicional)</h2><br>');

/* Sintaxe 2 (Tradicional)
Função nomeada */

// 1ª Digitação (Aqui)
function exemplo2() {
    document.write("função nomeada <br>")
}

exemplo2()

// ________________________________________________________________________

document.write("__________________________________________________________________<br>");


document.write('<h2 style="color: blue;">Arrow Function (Moderna)</h2><br>');

/* Sintaxe 3 (Moderna)
Função Seta/Flecha (Arrow Function) */


// 2ª Digitação (Aqui)

let exemplo3 = () =>
    document.write('Arrow Function <br>')
exemplo3()

// _______________________ 3B


// 3ª Digitação (Aqui)

function dobra(valor) {
    return valor + 2;
}
document.write(dobra(10));
document.write("<br>")

let dobraB = valor => valor * 300

document.write(dobraB(20))
document.write("<br>")

// ________________________________________________________________________

document.write("__________________________________________________________________<br>");


document.write('<h2 style="color: blue;">Função para dobrar</h2><br>');

/* Exemplos

Função para dobrar */


// 4ª Digitação (Aqui)


// ________________ Usando "Arrow Function"


// 5ª Digitação (Aqui)


// ______________________________________

let dobraC = valor => valor * 300;
document.write( dobraC(20) );
document.write("<br>");

// ________________________________________________________________________

document.write("__________________________________________________________________<br>");


document.write('<h2 style="color: blue;">Função para formatar Valores ($  e R$)</h2><br>');

// ______________________________________
// Exemplos anteriores

let preco =1250;
let desconto = 77.88;
let precoFinal = preco - desconto;


// 6ª Digitação (Aqui)
function formataMoeda(valor) {
    return valor.toLocaleString('en', {
        style:'currency', currency:'USD'
});
}

let formataValor = valor => {
    return valor.toLocaleString('pt-br', {
        style:'currency', currency:'BRL'
});
}


document.write( formataMoeda(preco) );
document.write("<br>");
document.write( formataValor(desconto) );
document.write("<br>");
document.write( formataValor(precoFinal) );
document.write("<br>");

