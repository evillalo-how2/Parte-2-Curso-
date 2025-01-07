//Practica2.5
//Escribe una función que reciba un número n y devuelva un arreglo con
// los primeros n números de la secuencia de Fibonacci
let numero = Number(prompt("Ingresa un número y obtendrás una secuencia de Fibonacci"));
function ValidarFibonacci(numero){
    if(isNaN(numero)|| numero < 0 ){
        console.log("Por favor, ingresa un numero válido")
    }
    else if (numero === 0) {
        console.log("La secuencia de fibonacci es: []");
    }
    else if (numero === 1){
        console.log("La secuencia de fibonacci es [0]");
    }else{
        let fibonacci = [0,1];
        for(let i=2; i < numero; i++){
            fibonacci.push(fibonacci[i-1] +fibonacci[i-2]);
        }
        return `La secuencia de bonacci con ${numero} de elementos es : [${fibonacci.join(", ")}]`;
    }
}
console.log(ValidarFibonacci(numero));


