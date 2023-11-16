// Troca a imagem para (Velozes e Furiosos)


// Encontre o elemento <img> pelo atributo alt
// const imgElement = document.querySelector('img[alt="DOM"]');

// Defina o caminho local da imagem
// const caminhoLocal = 'img/A_Veloz.jpg';
// const caminhoLocal = 'img/B_Veloz.jpg';

// Altere o atributo src do elemento <img> para o caminho local
// imgElement.setAttribute('src', caminhoLocal);

// ____________________________________________________________________________

/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID
querySelector() -> seleciona UM elemento de acordo com um seletor
querySelectorAll() -> seleciona VÁRIOS elementos de acordo com um seletor */

// ____________________________________________________________________________
// Modificando elementos


// 1ª Digitação (Aqui)
// Selecionando pelo Id
const titulo = document.getElementById('titulo-principal');

// Selacionado pela TAG
const pagina = document.querySelector('body');
const legenda = document.querySelector('figcaption');

// Selecionar todas as TAG's 'H2'
const subtitulo = document.querySelectorAll('h2');
const paragrafo = document.querySelectorAll('p');


// ____________________________________________________________________________

// Modificando elementos


// 2ª Digitação (Aqui)
// Mudando o primeiro H1
titulo.textContent = "Hello World";

// Cor do Fundo (backgroundColor)
pagina.style.backgroundColor = "lightgreen";

// Mudando o Segundo H2
subtitulo[1].textContent = 'Full-Stack';


// Mudando a Legenda (figcaption)
legenda.innerHTML = "<b> Veloz e Furioso </b>"




// ____________________________________________________________________________

// CSS vis JS

// CSS do (H1)
titulo.style.textAlign = "center";
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';
titulo.style.color ="red";

// CSS do (H2)
const subtitulos = document.querySelectorAll('h2');

// Modifique a cor da fonte de todos os elementos <h2> para azul, por exemplo

// Sintaxe (Arrow Function)
// subtitulos.forEach(subtitulo => {
//   subtitulo.style.color = 'blue';
// });

// Sintaxe For...of (Loop comum)
for (const subtitulo of subtitulos) {
    subtitulo.style.color = 'blue';
  }


// ____________________________________________________________________________

// CSS vis JS (Tabela)

// Modificar o texto do <h3> "Editores"


// 3ª Digitação (Aqui)
// Modificar Texto (H3)
const tituloEditores = document.querySelector('h3');

tituloEditores.textContent = "Melhores Editores";
tituloEditores.style.color = "orange";
tituloEditores.style.fontSize = "28px";



// 4ª Digitação (Aqui)

// Adicionar um novo editor à lista:
const listaEditores = document.querySelector('#lista-editores');
const novoEditor = document.createElement('li');

novoEditor.textContent = 'Sublime';
listaEditores.appendChild(novoEditor);

const terceiroITEM = listaEditores.querySelectorAll('li')[2];
terceiroITEM.style.color = 'orange';