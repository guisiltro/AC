let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let arredondados = [];

numeros.forEach(function(valor) {
    arredondados.push(Math.ceil(valor))
});

console.log(arredondados)
