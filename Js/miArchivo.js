const nombreUsuario = prompt("Para comenzar con esta pagina, digite su primer nombre");
const apellidoUsuario = prompt("Ahora digite su apellido");
alert(`Bienvenido a esta pagina ${nombreUsuario} ${apellidoUsuario}, a continuación pediremos una información adicional para darte un servicio mas personalizado`);
const edadUsuario = prompt("Por favor ingrese su edad actual"); 
if (edadUsuario < 18) {
    alert("Este programa tiene contenido para un publico de gente más mayor, puedes recomendarnos con tus conocidos que sean mayores de edad.")
} else {
    alert(`Bienvenido al juego de adivinar un nuevo aleatorio solo para mayores de edad ${nombreUsuario} ${apellidoUsuario}! Comencemos con el juego`);
    let validacion;
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    do {
        let eleccionUsuario = prompt("Prueba tu suerte con este juego de azar, adivina el número del 1 al 10 que estoy pensando");
        if (eleccionUsuario == numeroAleatorio) {
            validacion = true;
            alert(`El número ${eleccionUsuario} es el número correcto, felicitaciones!`);
            break;
        } else {
            validacion = false;
            alert(`El número ${eleccionUsuario} no es el número correcto, vuelve a intentarlo!`);
        }
    } while (validacion === false);
}
