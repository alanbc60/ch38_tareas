document.addEventListener('DOMContentLoaded', () => {
    const textoNombre = document.querySelector('#textoNombre');
    const botonCambiatNombre = document.querySelector('#btnCambiarNombre');
  
    botonCambiatNombre.addEventListener('click', () => {
        let exito = false;
        while(exito == false){
            const nuevoNombre = prompt('¿Cual es tu nombre?');
            // verifica que el nombre no este vacio
            
            if(!nuevoNombre){
                alert('Por favor ingresa tu nombre');
            }
    
            else{
                textoNombre.innerHTML = `Hola ${nuevoNombre}`;
                exito = true;
                mostrarToast();
            
            }
        }       
        // h1.textContent = `Hola ${nuevoNombre}`;
    });

    function mostrarToast() {
        const toastBody = document.querySelector('.toast-body');
        document.querySelector('.toast').classList.add('show');

        toastBody.textContent = 'Se ha cambiado el nombre';

        // cambiar el color del nombre
        textoNombre.style.color = 'Blue';

        setTimeout(() => {
            document.querySelector('.toast').classList.remove('show');
            toastBody.textContent = '';
        }, 3000);
    }

});