//Practica 2.1
//Dado un numero imprimir si es par o impar 
let input = prompt("Ingrese un número")
let number = Number(input)

if (isNaN(number)){
    console.log("El valor ingresado no corresponde a un númeo válido");
}
else {
    if (number %2 == 0) {
    console.log('El numero',(number),'es par');  
    }
    else{
        console.log('El numero',(number),'es impar')
    }
}
