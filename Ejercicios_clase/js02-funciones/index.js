/**
 * Recibe un mensaje y lo imprime en un paragraph
 * @param {string} mensaje para imprimir en el DOM
 *
 */
// const imprimirEnParagraph = mensaje => document.getElementById("message").innerHTML = mensaje  ;
 
// // imprimirEnConsola("Hola Ch38, día de frutas y verduras");
// // imprimirConAlert("ahhhhhhhh");
// // imprimirEnParagraph("Tengo hambre");

// /**
//  *  Función que imprima en consola o alert o paragraph (solo una opción).
//  */
// const imprimirMensaje = (tipo, mensaje) => {
//     switch (tipo) {
//         case "consola" || 1:
//             console.log(mensaje);
//             break;
//         case "alert" || 2:
//             alert(mensaje);
//             break;
//         case "paragraph" || 3:
//             imprimirEnParagraph(mensaje);
//             break;
//         default:
//             alert("Tipo no válido");
//             break;
//     }
// }


// imprimirMensaje( "opcion", "mensaje" );
// imprimirMensaje( "consola", "Hola" );
// imprimirMensaje( "alert", "Hola" );
// imprimirMensaje( "paragraph", "Hola" );

// imprimirMensaje( 1, "Hola" ); //  imprime en consola
// imprimirMensaje( 2, "Hola" ); // imprime en alert
// imprimirMensaje( 3, "Hola" ); // imprime en paragraph


// ============ Ordenamiento  =============

const nombres = [ "Nico", "Emma", "Donaji", "Erick", "Andrés", "Kris"];

// Debo ordenar de form ascendente
console.log(  nombres.sort() ); // ['Andrés', 'Donaji', 'Emma', 'Erick', 'Kris', 'Nico']

const frutas = ["Manzana", "zarzamora", "Pera", "fresa"]; // [Manzana, Pera, fresa, zarzamora]
console.log( frutas.sort() ); // ['Manzana', 'Pera', 'fresa', 'zarzamora']

let numeros = [ 5, 100, 3, 20 ]; // 100, 20, 3, 5
console.log( numeros.sort() );

numeros = [ 4, 90, 2, 67 ];

// ordenar de forma descendente

console.log( numeros.sort( (a, b) => b - a ) );


