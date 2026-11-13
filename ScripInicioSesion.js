const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const correo = document.querySelector('input[name="correo"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.correo === correo &&
        usuario.contraseña === contraseña
    );

    if (usuarioEncontrado) {
        sessionStorage.setItem("nombreUsuario", usuarioEncontrado.nombre);
        alert("Inicio de sesión exitoso");
        window.location.href = "dashboardUsuario.html";

    } else {
        alert("Correo o contraseña incorrectos");
    }
});