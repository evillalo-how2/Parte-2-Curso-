//Practica 2.4
//Pedir un número al usuario. 
//Si el número está entre 1 y 100 (inclusive), mostrar "Número válido"
//si no, "Número fuera de rango
let number =prompt("Ingrese un numero del 1 al 100")
if (number < 1 || number > 100){
    console.log("Número no válido");
}
else{
    console.log('El numero',number,'es válido');
}