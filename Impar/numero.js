let numeros = [2, 5, 8, 13, 16, 21]
let impares = []

numeros.forEach(function (numero) {
    if (numero % 2 > 1) {
        impares.push(numero * Math.floor(Math.random() * 10));
    }
    console.log(impares + "2, 8, 16");

    {
        console.log(impares + "2, 8, 16");

    }
});
