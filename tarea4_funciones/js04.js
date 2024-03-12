// Exercise #4 (sugerencia filter() e includes())
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

document.addEventListener('DOMContentLoaded', () => {
    const container_js4 = document.querySelector('.container_js4');
    const btn = document.querySelector('#btnJs4');
    btn.addEventListener('click', () => {

        // Filtro de cursos comunes entre ambos
        let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));
        
        if(cursosComunes.length > 0) {
            for (curso of cursosComunes) {
                console.log("Curso comun: " + curso);
                // crear un elemento p y mostrar el resultado
                const textoResultado = document.createElement('p');
                textoResultado.innerHTML = `Curso comun: ${curso}`;
                container_js4.appendChild(textoResultado);
            }
        }
        else{
            alert("No hay cursos comunes");
        }

    })
})






