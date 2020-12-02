function postreNavideño() {
    swal("Postre navideño");
}

function postreFresa() {
    swal("Postre de fresa");
}

function Cheesecake() {
    swal("Postre Cheesecake");
}


var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');

function contactar() {
    console.log('No Enviar formulario');
    if (nombre.value.length <= 0 || correo.value.length <= 0) {
        swal("Ingrese los datos!", "...nombre, y correo!");
    }
}