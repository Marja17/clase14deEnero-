/*operadores aritméticos*/
// + - / * % ()
//siempre se le da prioridad a lo que hay dentro de los parentesis 


let operacion = 3 * 5 + (10 - 5)
console.log(operacion)

let operacion2 = 3 - 5 / 2 * 4 ;
console.log (operacion2)

/*operadores relacionales*/

//<,>, >=, ==, ===, !=, !==

//boolean true false

console.log(7 < 7) // no estamos incluyendo el numero a comparar 
console.log ( 7 <= 7) // incluyendo el numero a comparar

console.log (7 == '7'); //compara el valor 
console.log (7 === "7"); // compara valor y tipi de datos 

console.log (7 != '7')
console.log (7 !== '7')

/*Incremento y decremento*/
//+=, -=, *=, /=

let incremento = 5;
incremento += 5;//incremento = incremento + 5
console.log (incremento);

incremento -= 5;
//incremento = incremento -5
console.log (incremento);

incremento *= 5;
//incremento = incremento *5
console.log(incremento);

incremento /= 5;
console.log (incremento);

/*operador unario*/
//++, --
//sumar 1 o restar 1
//incremento y decremento

let sumar = 0;
sumar ++;
console.log (sumar);

sumar++;
console.log(sumar);

sumar--
sumar--
console.log (sumar);

//++ variable = preincremento - primero modifica el valor y ya despues hace uso de la variable 
// variable++ = postincremento - usando la variable y despues hace el incremento
let num = 5;
console.log (num++);
console.log (num);

for(let i = 0; i < 5; i++){
    console.log ("Este es el ciclo padre")
    //iteracion 
    //primera iteracion, se detiene para que el siguiente pueda hacer susu propias iteraciones o repeticiones 
    for( let j = 0 ; j < 5; j ++){
    console.log ("Este es el ciclo hijo")
    //hace sus interacciones(repeticiones){

    }
}