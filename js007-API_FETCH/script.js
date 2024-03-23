document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#contenedor_tabla_usuarios');
    const contenedorFecha = document.querySelector('.contenedorFecha');
    const tableUsuarios = document.querySelector('#table_usuarios');
    const thead = document.querySelector('#theadUsers');
    const tbody = document.querySelector('#tbodyUsers');

    const btn = document.querySelector('#btn');
    let clicksBoton = 0;

    btn.addEventListener('click', async () => {
        console.log("click boton: "+clicksBoton);

        // si es la primera solicitud
        if(clicksBoton === 0) {
            await getData(contenedorFecha, thead, tbody);
            clicksBoton++;
            mostrarToast("Primera solicitud");

        }


        else{
            
            const fechaAlmacenadaString = localStorage.getItem('fecha');
            let fechaAlmacenada;

            if (fechaAlmacenadaString) {
                fechaAlmacenada = new Date(parseInt(fechaAlmacenadaString));
            } 
            
            else {
                console.error("No se encontró ninguna fecha almacenada en el almacenamiento local.");
            }

            const fechaActual = new Date();
            const minutos = (fechaActual.getTime() - fechaAlmacenada.getTime()) / 60000;
            console.log("minutos:", minutos);

            // si es la primera vez o el minuto es mayor a 1
            if ( (clicksBoton > 0 && minutos > 1 && fechaAlmacenada !== null) ) {
                await getData(contenedorFecha, thead, tbody);            
                mostrarToast("solicitud mayor a 1 minuto se hará de nuevo la solicitud");
            }

                    // comparar las fechas de la primera solicitud con la segunda
            else if(clicksBoton > 0 && minutos <= 1) {

                console.log("Segunda vez, menor a 1 minuto");

                contenedorFecha.innerHTML = ``;
                const textoFecha = document.createElement('p');
                textoFecha.innerHTML = `Fecha: ${fechaActual.toLocaleString()}`
                contenedorFecha.appendChild(textoFecha);

                const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
                console.log("data del local storage: ", dataLocalStorage);
                tbody.innerHTML = '';

                setTimeout(() => {
                    for (let i = 0; i < dataLocalStorage.data.length; i++) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${dataLocalStorage.data[i].id}</td>
                            <td>${dataLocalStorage.data[i].first_name}</td>
                            <td>${dataLocalStorage.data[i].last_name}</td>
                            <td>${dataLocalStorage.data[i].email}</td>
                            <td><img class="img-fluid rounded-circle" src="${dataLocalStorage.data[i].avatar}" alt="${dataLocalStorage.data[i].first_name} ${dataLocalStorage.data[i].last_name}"></td>
                        `;
                        tbody.appendChild(row);
                    }
                }, 3000);

                // agregar una notificacion toast de bootsrap
                mostrarToast("Solcitud menor a 1 min - leyendo del local storage");
            };

        }










        clicksBoton++;
    });
});


async function getData(containerFecha, thead, tbody) {

    thead.innerHTML = ``;
    tbody.innerHTML = ``;
    containerFecha.innerHTML = ``;


    const response = await fetch('https://reqres.in/api/users?delay=3');

    const data = await response.json();
    console.log(data);

    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Image</th>
        </tr>
    `;

    if(response.ok) {

        data.data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img class="img-fluid rounded-circle" src="${user.avatar}" alt="${user.first_name} ${user.last_name}"></td>
            `;
            tbody.appendChild(row);
        });

        // almacenar al local storage
        localStorage.setItem('data', JSON.stringify(data));

        // Obtener la fecha actual y convertirla a marca de tiempo en milisegundos
        const dateActual = new Date();
        const marcaDeTiempo = dateActual.getTime();
        console.log("marca de tiempo: "+marcaDeTiempo);

        // Almacenar la marca de tiempo en localStorage
        localStorage.setItem('fecha', marcaDeTiempo);

        // mostrar en el DOM la fecha y hora
        const textoFecha = document.createElement('p');

        textoFecha.innerHTML = `Fecha: ${new Date().toLocaleString()}`
        containerFecha.appendChild(textoFecha);
    }
}

function mostrarToast(mensaje) {
    const toastBody = document.querySelector('.toast-body');
    document.querySelector('.toast').classList.add('show');

    toastBody.textContent = mensaje;

    setTimeout(() => {
        document.querySelector('.toast').classList.remove('show');
        toastBody.textContent = '';
    }, 5000);
}


function mostrarSpinner(){
    
}

