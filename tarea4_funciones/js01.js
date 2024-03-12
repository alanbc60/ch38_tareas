// Ejercicio 1  (Exercise #1 (sugerencia: join())

// Completar la funcion para que imprima el string "This is a sentence"
document.addEventListener('DOMContentLoaded', () => {    

    const container_js1 = document.querySelector('.container_js1');

    const btn = document.querySelector('#btnJs1');

    btn.addEventListener('click', () => {
        const sentencia = printOutString();
        // crear un elemento p y mostrar el resultado
        const resultado = document.createElement('p');
        resultado.innerHTML = sentencia;
        container_js1.appendChild(resultado);
    })

});



let array = ["this", "is", "a", "sentence"];
function printOutString() {
    let sentencia = "";
    for (let i = 0; i < array.length; i++) {
        sentencia = sentencia + " " + array[i];
    }
    
    return sentencia;
}


console.log(printOutString());

const resultado = printOutString();
console.log( typeof resultado );


// usando join
const resultado2 = array.join(" ");
console.log( resultado2 );

console.log( typeof resultado2 );