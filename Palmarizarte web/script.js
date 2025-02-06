// Selecciona el botón de menú y los enlaces de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Añade un evento de clic al botón de menú para mostrar/ocultar el menú en móviles
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Funcionalidad del Modal de Login
const modal = document.getElementById("loginModal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

// Evento para abrir el modal al hacer clic en "Iniciar Sesión" en la barra de navegación
openModal.addEventListener("click", (e) => {
    e.preventDefault();  
    modal.style.display = "flex";
});

// Evento para cerrar el modal al hacer clic en la "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Evento para cerrar el modal si el usuario hace clic fuera de él
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Funcionalidad para la pantalla de Login y Registro
const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");

const openLogin = document.getElementById("openLogin");  // Enlace de "Iniciar Sesión"
const openRegister = document.getElementById("openRegister");  // Enlace de "Registrarse"

const closeLogin = document.querySelector(".close-login");
const closeRegister = document.querySelector(".close-register");

// Abrir pantalla de inicio de sesión
openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none"; // Cierra el modal de selección
    loginScreen.style.display = "flex"; // Muestra la pantalla de login
});

// Abrir pantalla de registro
openRegister.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none"; // Cierra el modal de selección
    registerScreen.style.display = "flex"; // Muestra la pantalla de registro
});

// Cerrar la pantalla de inicio de sesión
closeLogin.addEventListener("click", () => {
    loginScreen.style.display = "none";
});

// Cerrar la pantalla de registro
closeRegister.addEventListener("click", () => {
    registerScreen.style.display = "none";
});

// Cerrar la pantalla si el usuario hace clic fuera del formulario
window.addEventListener("click", (e) => {
    if (e.target === loginScreen) {
        loginScreen.style.display = "none";
    }
    if (e.target === registerScreen) {
        registerScreen.style.display = "none";
    }
});


// Obtener elementos del DOM
const galleryModal = document.getElementById('galleryModal');
const openGalleryModal = document.getElementById('openGalleryModal');
const closeGalleryModal = document.querySelector('#galleryModal .close-modal');

// Abrir el modal de la galería al hacer clic en "Galeria"
openGalleryModal.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace recargue la página
    galleryModal.style.display = 'flex'; // Muestra el modal
});

// Cerrar el modal de la galería al hacer clic en el botón de cerrar
closeGalleryModal.addEventListener('click', () => {
    galleryModal.style.display = 'none'; // Oculta el modal
});

// Cerrar el modal de la galería al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.style.display = 'none'; // Oculta el modal
    }
});
