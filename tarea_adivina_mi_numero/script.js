document.addEventListener('DOMContentLoaded', () => {
    const contenedorJuego = document.querySelector('.divJuego');
    const contenedorInstrucciones = document.querySelector('.divInstrucciones');
    const btnEmpezar = document.querySelector('#btnEmpezar');
    let min = 1;
    let max = 100;

    btnEmpezar.addEventListener('click', () => {
        contenedorInstrucciones.innerHTML = `
            <p>Piensa en un número entre 1 y 100</p>
        `;

        // ocultar el boton de empezar

        btnEmpezar.style.opacity = '0';
        btnEmpezar.style.pointerEvents = 'none';


        contenedorJuego.innerHTML = `
            <button id="btnEsMenor">Mi número es menor</button>
            <button id="btnCorrecto">Correcto</button>
            <button id="btnEsMayor">Mi número es mayor</button>
        `;

        busquedaBinaria();
    });

    function actualizarBotones() {
        const btnEsMenor = document.querySelector('#btnEsMenor');
        const btnEsMayor = document.querySelector('#btnEsMayor');
        const btnCorrecto = document.querySelector('#btnCorrecto');

        btnEsMenor.removeEventListener('click', handleClickEsMenor);
        btnEsMenor.addEventListener('click', handleClickEsMenor);

        btnEsMayor.removeEventListener('click', handleClickEsMayor);
        btnEsMayor.addEventListener('click', handleClickEsMayor);

        btnCorrecto.removeEventListener('click', handleClickCorrecto);
        btnCorrecto.addEventListener('click', handleClickCorrecto);
    }

    function handleClickEsMenor() {
        max = Math.floor((min + max) / 2) - 1;
        busquedaBinaria();
    }

    function handleClickEsMayor() {
        min = Math.floor((min + max) / 2) + 1;
        busquedaBinaria();
    }

    function handleClickCorrecto() {
        console.log("Correcto");
        mostrarMensajeCorrecto("¡Enhorabuena!", 3000);
    }

    function busquedaBinaria() {
        const num = Math.floor((min + max) / 2);

        // mostrar el elemento en la pantalla

        const p = document.createElement('p');
        p.innerHTML = `¿Es ${num} tu número?`;
        contenedorJuego.appendChild(p);

        // limpiar la pantalla
        

        if (min > max) {
            const p = document.createElement('p');
            p.innerHTML = "¡Imposible! ¡Estás mintiendo!";
            contenedorJuego.appendChild(p);
            return;
        }

        if (min === max) {

            const p = document.createElement('p');
            p.innerHTML = `¡Enhorabuena! ¡Encontraste ${num}!`;
            contenedorJuego.appendChild(p);
            return;
        }

        actualizarBotones();
    }



    function mostrarMensajeCorrecto(mensaje, tiempoVisible = 3000) {
        console.log("Entro a mostrar el error");
        const toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: tiempoVisible,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
      
        return toast.fire({
          title: mensaje,
          icon: 'success',
          customClass: {
            popup: 'rounded'
          }
        });
    }

});
