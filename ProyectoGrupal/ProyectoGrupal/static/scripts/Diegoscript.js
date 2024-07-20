document.addEventListener('DOMContentLoaded', function() {
    var collapseButtons = document.querySelectorAll('.collapse-button');
    collapseButtons.forEach(function(button) {
        var targetId = button.getAttribute('data-bs-target').substring(1);
        var collapseElement = document.getElementById(targetId);
        var collapsedContent = collapseElement.querySelector('.card-body');

        collapseElement.addEventListener('show.bs.collapse', function () {
            button.style.display = 'none';
        });

        collapseElement.addEventListener('hide.bs.collapse', function () {
            button.style.display = 'block';
        });

        collapsedContent.addEventListener('click', function () {
            var bsCollapse = new bootstrap.Collapse(collapseElement, {
                toggle: true
            });
        });
    });
});


const HTMLResponse = document.querySelector("#app");
const tpl = document.createDocumentFragment();
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        const userData = data.map(categories => ({
            username: username,
            email: email
        }));
        console.log(userData);
    })
    .catch(error => console.error('Error al consumir la API:', error));
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contactForm");
        const successMessage = document.getElementById("mensaje-exito");
      
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          if (validateForm()) {
            successMessage.style.display = "block";
            form.reset();
          }
        });
        
      
        function validateForm() {
          const nombre = document.getElementById("nombre").value.trim();
          const email = document.getElementById("email").value.trim();
          const mensaje = document.getElementById("mensaje").value.trim();
      
          if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return false;
          }
      
          return true;
        }
      });
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores de los campos del formulario
        var rut = document.getElementById('rut').value;        
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var usuario = document.getElementById('usuario').value;
        var email = document.getElementById('email').value;
        var contrasena = document.getElementById('contrasena').value;
        var validarContrasena = document.getElementById('validarContrasena').value;

        // Validar si algún campo está vacío
        if ( !rut ||!nombre || !apellido || !usuario || !email || !contrasena || !validarContrasena) {
            alert('Por favor completa todos los campos del formulario.');
            return;
        }

        // Validar si la contraseña y validar contraseña coinciden
        if (contrasena !== validarContrasena) {
            alert('Las contraseñas no coinciden. Por favor, verifica.');
            return;
        }

        // Mostrar mensaje de éxito
        var successAlert = document.getElementById('successAlert');
        successAlert.style.display = 'block';

        // Borrar los campos del formulario
        /*
        document.getElementById('rut').value = "";       
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('usuario').value = "";
        document.getElementById('email').value = "";
        document.getElementById('contrasena').value = "";
        document.getElementById('validarContrasena').value = "";
        */
        // Redireccionar a la página de inicio de sesión después de 2 segundos // 2000 milisegundos = 2 segundos
    });

// Diegoscripts.js
function toggleEditForm(field) {
    var fieldElement = document.getElementById(field);
    var formElement = document.getElementById('edit-form-' + field);
    var editOptions = fieldElement.nextElementSibling;

    if (formElement.style.display === 'block') {
        // Ocultar formulario y mostrar el campo y el botón "..."
        fieldElement.style.display = 'inline-block';
        formElement.style.display = 'none';
        editOptions.style.display = 'inline-block';
    } else {
        // Mostrar formulario y ocultar el campo, pero mantener el botón "..."
        fieldElement.style.display = 'none';
        formElement.style.display = 'block';
        editOptions.style.display = 'inline-block';
    }
}

// Añadimos el evento de cancelar edición al formulario
document.querySelectorAll('.edit-form').forEach(function(form) {
    form.addEventListener('reset', function(e) {
        e.preventDefault();
        var field = this.querySelector('input[name="field"]').value;
        toggleEditForm(field); // Asegura que el formulario se oculta correctamente
    });
});
