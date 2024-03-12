// Exercise #3 (sugerencia reduce())
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.


document.addEventListener('DOMContentLoaded', () => {
    const container_js3 = document.querySelector('.container_js3');
    const btn = document.querySelector('#btnJs3');
    const array = [1, 2, 3, 4];
    btn.addEventListener('click', () => {
        const resultadoSuma = array.reduce((a, b) => a + b, 0);
        const resultadoProducto = array.reduce((a, b) => a * b, 1);

        // crear un elemento p y mostrar el resultado
        const textoResultado = document.createElement('p');
        textoResultado.innerHTML = `La suma es: ${resultadoSuma} y el producto es: ${resultadoProducto}`;
        container_js3.appendChild(textoResultado);
        
    })
})


// const array = [1, 2, 3, 4];
// console.log( array );

// // sumar el array
// let suma = 0;
// for (let i = 0; i < array.length; i++) {
//     suma = suma + array[i];
// }

// // multiplicar el array
// let producto = 1;
// for (let i = 0; i < array.length; i++) {
//     producto = producto * array[i];
// }
// console.log( "La suma es: " + suma );
// console.log( "El producto es: " + producto );

