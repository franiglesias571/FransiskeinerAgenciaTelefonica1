let numeroTelefono = '098928341';

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userTelefono = prompt('Ingresa tu número de celular. Tienes  ' + (i + 1) + ' intentos');
        if (userTelefono === numeroTelefono) {
            alert('Bienvenido/a!');
            ingresar = true
            break;
        }
        else {
            alert('Error. Le quedan ' + i + ' intentos, vuelva a ingresar su clave')
        }
    }

    return ingresar;
}

if (login()) {

    // agrego var saldo, y las opciones del login (parte dos del login)

    let saldo = '1900';

    let seleccion = prompt('Elige una opción: \n1 - Consulta de Saldo. \n2 - Recarga Solidaria. \n3 - Descuento en carteleras de Cine. \n4 - Fecha y Hora actual. \n digita Esc para finalizar.'); //ESTA PROMPT ES EL COMIENZO LUEGO DE LOGIN()= TRUE. ES DECIR, EL LOGIN FUE ACERTADO CORRECTAMENTE. 

    while (seleccion != 'Esc' && seleccion != 'esc') {

        switch (seleccion) { //EN ESTA SWITCH CREO EL WORKFLOW PARA LAS SELECCIONES DE CASOS N 1 N 2 N3 N4 Y N.
            case '1':
                alert('Tu saldo disponible es $ ' + saldo);
                break;
            case '2':
                let solidario = parseInt(prompt('Ingresa número de teléfono a quien acreditar:'));
                let acreditacion = parseInt(prompt('Ingresa monto que quieras acreditar. *El monto se acreditará desde su saldo existente*.'));
                if (acreditacion <= saldo) {
                    saldo -= acreditacion;

                    alert('Recarga realizada con éxito. Se han recargado $ ' + acreditacion + ' al ' + solidario + '.');
                    break;
                }
                else {
                    alert('Disculpa, no tienes el saldo suficiente para realizar esta recarga. Intente nuevamente')

                }


                break;
            case '3':
                let Lifecinemas = '5555'
                let Moviecinemas = '1234'
                let Life21cinemas = '5678'
                let cine = prompt('Con agencia Telefonica tienes descuentos y 2x1 en todos los cines seleccionados! Elige el cine que mas te guste \n5 - Life Cinemas \n6 - Movie Cinemas \n7 - Life 21 Cinemas. ')

                switch (cine) { //AQUI CREO OTRO SWITCH DENTRO DE LA SWITCH PRINCIPAL PARA DERIVAR MAS OPCIONES DENTRO DE OTRA. 
                    case '5':
                        alert('Gracias por elegir Life Cinemas! Presenta el siguiente código para acceder al 2x1 de Lunes a Jueves, y combo de snacks, recuerda mencionar que eres un cliente plus de nuestro servicio para poder utilizar el código correctamente.')
                        alert('Tu código es: ' + Lifecinemas + ' ')
                        break;

                    case '6':
                        alert('Gracias por elegir Movie Cinemas! Presenta el siguiente código para acceder al 2x1 de Lunes a Jueves, y combo de snacks, recuerda mencionar que eres un cliente plus de nuestro servicio para poder utilizar el código correctamente.')
                        alert('Tu código es: ' + Moviecinemas + ' ')
                        break;

                    case '7':
                        alert('Gracias por elegir Life 21 Cinemas! Presenta el siguiente código para acceder al 2x1 de Lunes a Jueves, y combo de snacks, recuerda mencionar que eres un cliente plus de nuestro servicio para poder utilizar el código correctamente.')
                        alert('Tu código es: ' + Life21cinemas + ' ')
                }


                break;
            case '4':
                //USAR NEW COMO PALABRA RESERVADA Y AGREGAR DATE COMO OBJETO

                let fechadehoy = new Date();
                    alert('La hora y fecha demostrada es extraído de Montevideo, Uruguay. Hoy es: '+fechadehoy+' ')
                break;

            default:
            alert('Has marcado una opción inválida, intente nuevamente.')
        }
        seleccion = prompt('Elige una opción: \n1 - Consulta de Saldo. \n2 - Recarga Solidaria. \n3 - Descuento en carteleras de Cine. \n4 - Fecha y Hora actual. \n digita Esc para finalizar.');
    }
}else{
    //Has marcado erroneamente tu celular. intente de nuevo.
    alert('Has pasado el límite de errores al ingresar tu número. Intenta nuevamente.')
    
}

alert('¡Gracias por confiar en nosotros! ¡Hasta la próxima!')


login()