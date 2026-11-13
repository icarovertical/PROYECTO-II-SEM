
const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellidos = document.querySelector('input[name="apellidos"]').value;
    const fechaNacimiento = document.querySelector('input[name="fecha_nacimiento"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    const usuario = {
        nombre,
        apellidos,
        fechaNacimiento,
        correo,
        contraseña
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.some(
        usuario => usuario.correo === correo
    );

    if (existe) {
        alert("Este correo ya está registrado");
        return;
    }

    usuarios.push(usuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    console.table(usuarios);

    alert("Usuario registrado correctamente");

    formulario.reset();
});