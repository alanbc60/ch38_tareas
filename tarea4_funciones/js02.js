
// Usar map
// Write a function that:
// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]


document.addEventListener('DOMContentLoaded', () => {
    const container_js2 = document.querySelector('.container_js2');
    const btn = document.querySelector('#btnJs2');
    const array = [1, 2, 4, 5];
    btn.addEventListener('click', () => {
        const resultado = doubleArray( array );
        // crear un elemento p y mostrar el resultado
        const textoResultado = document.createElement('p');
        textoResultado.innerHTML = `El nuevo array es: ${resultado}`;
        container_js2.appendChild(textoResultado);
    })
})



const doubleArray = (array) => {
    return array.map( element => element * 2 );
}



