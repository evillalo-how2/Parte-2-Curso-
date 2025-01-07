//Practica 2.7 
//Verificar si 2 palabras son anagramas
let palabra1= String(prompt("Ingresa la primera palabra")).toLowerCase()
let palabra2= String(prompt("Ingresa la seguna palabra")).toLowerCase()
function validarAnagramas(palabra1, palabra2) {
return palabra1.split('').sort().join('') === palabra2.split('').sort().join('');
}
if(validarAnagramas(palabra1,palabra2)){
    console.log(`"${palabra1}" y "${palabra2}" son anagramas.`);
}else{
    console.log(`"${palabra1}" y "${palabra2}" no son anagramas.`);
}

