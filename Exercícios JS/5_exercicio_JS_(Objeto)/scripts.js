document.write('<h2 style="color: blue;">Resolução</h2><br>');

// Exemplo 2: Objeto contendo informações sobre um carro de luxo da Ferrari
let carroFerrari = {


// Escreva as propriedades do objeto aqui

    
    modelo: 'LaFerrari ',
    ano: 2013,
    cor: 'Vermelho',
    potência: '960 CV',
    preco: 14000000

    
    
};
let preco = carroFerrari.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


// Exibir informações sobre o carro
document.write(`Modelo do carro: <strong>${carroFerrari.modelo}</strong><br>`);
document.write(`Preço do carro: <strong>${preco}</strong><br>`);


