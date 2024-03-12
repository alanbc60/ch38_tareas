// Exercise #5
// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// Write a command that prints out all of the people in the list.
// Write the command to remove "Dani" from the array.
// Write the command to remove "Juan" from the array.
// Write the command to move "Luis" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
// Write the command that gives the indexOf where "Maria" is located.
// At the end of the exercise, there should be 4 people in the array.


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];   

document.addEventListener('DOMContentLoaded', () => {
    const container_js5 = document.querySelector('.container_js5');
    const btn = document.querySelector('#btnJs5');
    const searchMessage = document.querySelector('#searchMessage');
    const indexMessage = document.querySelector('#indexMessage');
    const people = ["Ana", "Dani", "Carlos", "Juan", "Pedro", "Maria"];

    btn.addEventListener('click', () => {
        // imprimir todos los elementos de la lista
        const lista = document.createElement('p');
        lista.innerHTML = `Lista: ${people}`;

        // borrar "Dani" de la lista
        people.splice(1, 1);
        lista.innerHTML += `<br>Lista modificada: ${people}`;

        // borrar "Juan" de la lista
        people.splice(3, 1);
        lista.innerHTML += `<br>Lista modificada: ${people}`;

        // mover "Luis" al principio de la lista
        people.unshift("Luis");
        lista.innerHTML += `<br>Lista modificada: ${people}`;

        // agregar "Alan" al final de la lista
        people.push("Alan");
        lista.innerHTML += `<br>Lista modificada: ${people}`;
        
        container_js5.appendChild(lista);

        //Usando un bucle, itera a través de esta matriz y después de console.log "Maria", sal del bucle.
        let encontrado = false;
        for (let i = 0; i < people.length; i++) {
            if (people[i] === "Maria") {
                encontrado = true;
                break;
            }
        }

        const textoBusqueda = document.createElement('p');
        const textoIndice  = document.createElement('p');

        if (encontrado) {
            
            textoBusqueda.textContent = "Se encontró a Maria";
            textoIndice.textContent = `El índice de Maria es: ${people.indexOf("Maria")}`;
        } else {
            textoBusqueda.textContent = "Maria no se encontró en la lista";
            textoIndice.textContent = "";
        }

        container_js5.appendChild(textoBusqueda);
        container_js5.appendChild(textoIndice);
    });
});