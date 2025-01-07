//Practica 2.2
//Dadas 3 variables numericas, determinar cual es el mayor y mostrarlo en consola, si hay empate, indicarlo.
prompt ("Comparador de 3 variables para determinar la de mayor valor")
let number1 = prompt("Ingrese el primer numero");
let number2 = prompt("Ingrese el segundo numero");
let number3 = prompt("Ingrese el tercer numero");

function CompareNumbers(number1, number2, number3){

if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
console.log("Uno o más de los valores ingresados no son válidos, por favor ingrese un número válido")
return;
}
let number_list =[number1,number2,number3];
let max =Math.max (...number_list);
let Ntimes= number_list.filter(num => num === max).length;


if(Ntimes > 1){
    console.log(`El numero mayor es ${max} y se repite (${Ntimes}veces`);
}else{
        console.log(`El numero mas grande es ${max}`);
    }
}
CompareNumbers(number1,number2,number3)



