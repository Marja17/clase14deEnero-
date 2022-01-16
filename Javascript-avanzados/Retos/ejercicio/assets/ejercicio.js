let arreglo = prompt ('Escribe tu palabra');


function invertirPalabra(cadena){
     let arreglo=cadena.split('');
     arreglo.reverse(); 
     let cadenaInvertida = arreglo.join(); 
     return  document.write (`<center> tu palabra invertida es  ${cadenaInvertida} } <br>`);

}

invertirPalabra(arreglo)