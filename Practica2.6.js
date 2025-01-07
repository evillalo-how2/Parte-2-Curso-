//Practica2.6
//Escribir una función que determine si un número entero positivo es un palíndromo.
function ValidarPalindromo(numero){
    console.log("Por favor, ingresa un número entero positivo.");
    if (isNaN(numero || numero < 0)) {
    }else {
        let arrayOriginal= Array.from(String(numero), Number);
        let arrayInvertido= [];
        for(let i = arrayOriginal.length -1; i >=0; i--){
            arrayInvertido.push(arrayOriginal[i]);
        }
        let esPalindromo = true;
        for(let i =0; i < arrayOriginal.length; i++){
            if(arrayOriginal[i] !== arrayInvertido[i]){
                esPalindromo = false;
                break;
            }
        }
        if (esPalindromo){
            console.log(`${numero} es un palindromo.`);
        }else{
            console.log(`${numero} no es un palindromo.`);
        }
   }
}
let numero = Number(prompt("Ingresa un número entero positivo para verificar si es un palíndromo"));
console.log(ValidarPalindromo(numero));