// função prompt() coletar valor e para exibir utilize o console.log

var carroBarato = 15000;
var carroCaro = 60000;
//

var carro1 = prompt("Insira o nome do primeiro veiculo");
var valorCarro1 = prompt("Insira o valor do primeiro veiculo");

var carro2 = prompt("Insira o nome do segundo veiculo");
var valorCarro2 = prompt("Insira o valor do segundo veiculo");

var carro3 = prompt("Insira o nome do terceiro veiculo");
var valorCarro3 = prompt("Insira o valor do terceiro veiculo");

if ( valorCarro1 < carroBarato ){
    console.log("Este carro", carro1, " é barato  ", valorCarro1);
};
if ( valorCarro2 < carroBarato ){
    console.log("Este carro", carro2, " é barato  ", valorCarro2);
};
if ( valorCarro3 < carroBarato ){
    console.log("Este carro", carro3, " é barato  ", valorCarro3);
};
if ( valorCarro1 > carroBarato ){
    console.log("Este carro", carro2, " é barato  ", valorCarro2);
};
if ( valorCarro2 > carroBarato ){
    console.log("O carro mais barato é ", carro1);
};
if ( valorCarro3 > carroBarato ){
    console.log("O carro mais barato é ", carro1);
};