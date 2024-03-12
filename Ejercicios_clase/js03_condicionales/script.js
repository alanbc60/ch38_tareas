// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


document.addEventListener('DOMContentLoaded', () => {
    const contenedorEstacionesCondicionales = document.querySelector('.contenedorEstacionesCondicionales');
    const btnEstacion = document.querySelector('#btnEstacion');
    const txtEstacion = document.querySelector('#txtEstacion');


    const contenedorEstacionesSwitch = document.querySelector('.contenedorEstacionesSwitch');
    const btnEstacionSwitch = document.querySelector('#btnEstacionSwitch');
    const txtEstacionSwitch = document.querySelector('#txtEstacionSwitch');


    console.log(btnEstacion);

    btnEstacion.addEventListener('click', () => {
        let mes = parseInt(txtEstacion.value);
        console.log("Mes: " + mes);
        const estacionUsuario = estacion(mes);
        // crear una etiqueta p y mostrar el resultado 
        const resultado = document.createElement('p');
        resultado.textContent = `Estacion del usuario: ${estacionUsuario}`;
        contenedorEstacionesCondicionales.appendChild(resultado);

    });

    btnEstacionSwitch.addEventListener('click', () => {
        let mes = parseInt(txtEstacionSwitch.value);
        console.log("Mes: " + mes);
        const estacionUsuario = estacion2(mes);
        const resultado = document.createElement('p');
        resultado.textContent = `Estacion del usuario: ${estacionUsuario}`;
        contenedorEstacionesSwitch.appendChild(resultado);
    })

})


const estacion = (mes) => {
    let estacion = "";
    if (mes === 12 || mes === 1 || mes === 2) {
        estacion = "Invierno";
    }
    else if (mes === 3 || mes === 4 || mes === 5) {
        estacion = "Primavera";
    }
    else if (mes === 6 || mes === 7 || mes === 8) {
        estacion = "Verano";
    }
    else if (mes === 9 || mes === 10 || mes === 11) {
        estacion = "Otono";
    }
    else {
        estacion = "Mes no valido";
    }

    alert("Estacion:  " + estacion);
    return estacion;
}

const estacion2 = (mes) => {
    let estacion = "";
    switch (mes) {
        case 12:
        case 1:
        case 2:
            alert("Invierno");
            estacion = "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            alert("Primavera");
            estacion = "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            alert("Verano");
            estacion = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            alert("Otono");
            estacion = "Otono";
            break;
        default:
            alert("Mes no valido");
            estacion = "Mes no valido";
            break;

    }

    return estacion;
}

