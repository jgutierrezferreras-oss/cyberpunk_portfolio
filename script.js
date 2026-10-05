// ========================================
// FILTROS DE PROYECTOS
// ========================================

// Seleccionamos todos los botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");

// Seleccionamos todos los proyectos
const projectItems = document.querySelectorAll(".project-item");

// Revisamos qué botón presiona el usuario
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitamos la clase "active" de todos los botones
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activamos solamente el botón seleccionado
        button.classList.add("active");

        // Obtenemos el filtro seleccionado
        const filter = button.getAttribute("data-filter");

        // Revisamos cada proyecto
        projectItems.forEach(project => {

            const category = project.getAttribute("data-category");

            // Si seleccionamos "Todos" o coincide la categoría
            if (filter === "all" || filter === category) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

const backToTop = document.getElementById("backToTop");

// Detectamos cuando el usuario baja por la página
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


// Cuando presionamos el botón, volvemos arriba
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});