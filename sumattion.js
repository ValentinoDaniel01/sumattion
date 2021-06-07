var numeros = []
var suma = 0

function sumattion(dato){
    for(let i = 0; i <= dato; i++){
        numeros.push(i)
    }
    numeros.forEach (function(numero){
        suma += numero;
    });
    console.log(suma);
}
sumattion(5)
