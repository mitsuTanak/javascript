// Criando um array (ou vetor)

let equipe =["Christian Horner", "Hannah Schmitz","Gianpiero Lambiase","Red bull Racing"];

document.write('<h2 style="color: blue;">Criando um array (ou vetor)</h2><br>');


// 1ª Digitação (Aqui)

document.write("Os melhores Profissionais da F1 são:" +equipe+ "<br><br>")

document.write("O melhor Chefe da F1 é:" +equipe[0]+ "<br>")
document.write("O melhor Estrategista da F1 é o:" +equipe[1]+ "<br>")
document.write("O melhor Engenheiro da F1 é o:" +equipe[2]+ "<br>")

document.write("A melhor Equipe da F1 é a:" +equipe[3]+ "<br>")


document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

document.write('<h2 style="color: blue;">Array como matriz (array bidimensional)</h2><br>');

let equipesF1 = [
    // 0           1             2
    ['Mercedes', 'Ferrari', 'Red Bull'], // 0

    // 0         1          2           3         4
    ['McLaren', 'Haas', 'AlphaTauri', 'Alpine', 'Williams'], // 1
];

// Exibir Red Bull

// 2ª Digitação (Aqui)