// Write a function that performs the bubble algorithm.
// Input [3, 6, 12, 5, 100, 1]
// Output [1, 3, 5, 6, 12, 100]


document.addEventListener('DOMContentLoaded', () => {
    const container_js6 = document.querySelector('.container_js6');
    const btn = document.querySelector('#btnJs6');
    const array = [3, 6, 12, 5, 100, 1];
    btn.addEventListener('click', () => {
        const resultado = bubbleSort( array );

        // crear un elemento p y mostrar el resultado

        const textoResultado = document.createElement('p');
        textoResultado.innerHTML = `El array ordenado por bubble sort es: [${resultado}]`;

        container_js6.appendChild(textoResultado);
    })
})


const bubbleSort = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // console.log("J: " + j + " I: " + i);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            console.log(array)

        }
    }
    return array;
}

// console.log( bubbleSort([3, 6, 12, 5, 100, 1]) );
