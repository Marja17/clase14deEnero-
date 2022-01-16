let cadena1 = 'Hola';
console.log (cadena1);

let cadena2= new String ('Adiós');
console.log (cadena2);

//incledes () busca una cadena en otra y regresa true o false
console.log (cadena2.toLocaleLowerCase (). includes ('a'))
//convierte a minusculas a mayúsculas
console.log (cadena2.toLocaleLowerCase ())
console.log (cadena2.toUpperCase ())

//cohersion y conversión 

//cohersión- JavaScript convierte en automático un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());


/* Función que resice una palabra y la regresa invertida*/
let palabra = "Hola Mundo"
let arreglo = palabra.split('');
/*console.log (arreglo);

console.log(arreglo.reverse())*/

function invertirPalabra(cadena){
     let arreglo=cadena.split('');
     arreglo.reverse(); //invirtiendo un arreglo
     let cadenaInvertida = arreglo.join();//une los elementos de un arreglo y regresa un string 
     return console.log (cadenaInvertida);

}

invertirPalabra('Generation')