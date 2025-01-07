//Practica 2.3
//Dado un numero del 0 al 10 mostrar la calificacion en texto
//0-5 Reprobado
//6-7 regular
//8 Bien
//9 Muy bien
//10 Excelente
let note = Number(prompt("Ingrese la calificación del alumno como número del 0 al 10"));

function note_to_text(note){

if (isNaN(note)){
    console.log("El valor ingresado no fue valido, por favor ingrese un numero del 0 al 10");
}
if (note <= 5 ){
    console.log("Reprobado");
}
else if (note == 6 || note == 7 ) {
    console.log("Regular");
}
else if (note == 8 ){
    console.log("Bien");
}
else if (note == 9 ){
    console.log("Muy bien");
}
else if ( note == 10 ){
    console.log("Excelente");
}
}
note_to_text(note);
