// Exemplo 1: objeto básico

let atriz = {
    nome: 'angelina Jolie',
    nascimento: 1975,
    filmes: 60,
    nacionalidade: 'Estadunidense',
}


// 1ª Digitação (Aqui)


// Recuperando os valores
document.write('<h2 style="color: blue;">Usando Sintaxe de objeto básico</h2><br>');

// O JSON.stringify é uma função em JavaScript que converte um objeto JavaScript em uma representação de string no formato JSON (JavaScript Object Notation). Nesse caso, o objeto atriz está sendo convertido em uma string JSON. Isso é feito para que os dados do objeto possam ser exibidos de forma legível no documento HTML
document.write(`Todas propriedades do objeto atriz: <strong>${JSON.stringify(atriz)}</strong><br><br>`);
document.write(`Ano de nascimento da atriz: <strong>${atriz.nascimento}</strong><br>`);

// Exibir
document.write(`Minha atriz favorita é: <strong>${atriz.nome}</strong>, que nasceu em <strong>${atriz.nascimento}</strong>.<br>`);

document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

document.write('<h2 style="color: blue;">Objeto contendo array e outro objeto</h2><br>');

// Exemplo 2: Objeto contendo array e outro objeto


// 2ª Digitação (Aqui)

let celebridade = {
    nome: 'Scarlet Johansson',
    idade: 37,
    sexo: 'Feminino',
    filmes: ['lost in translation', 'The Avengers', 'Mariage Story'],
    cidade: 'Nova York',
    medidas: {
        peso: 57, 
        altura:  1.60,
    }

}

document.write(`Todas propriedades do objeto Celebridade: <strong>${JSON.stringify(celebridade)}</strong><br><br>`);
document.write(`A idade da atriz é de: <strong>${celebridade.idade}</strong><br>`);

// Exibir
document.write(`Minha atriz favorita é: <strong>${celebridade.nome}</strong>, que tem <strong>${celebridade.idade}</strong> anos.<br>`);




document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

document.write('<h2 style="color: blue;">Array do objeto</h2><br>');



// 3ª Digitação (Aqui)



