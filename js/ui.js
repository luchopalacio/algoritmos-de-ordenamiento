let algoritmoSeleccionado = null;

export function inicializarUI() {

    //tarjetas descriptivas
    const tarjetas = document.querySelectorAll(".descripcion");

    tarjetas.forEach(tarjeta => {
        const header = tarjeta.querySelector(".header-algoritmo");

        header.addEventListener("click", () => {
            tarjetas.forEach(t => {
                if (t !== tarjeta) t.classList.remove("activa");
            });
            tarjeta.classList.toggle("activa");
        });
    });

    //botones de algoritmos
    const botonesAlgoritmos = document.querySelectorAll(".btn-algoritmo");

    botonesAlgoritmos.forEach(boton => {
        boton.addEventListener("click", () => {

            // si ya estaba seleccionado: deseleccionar
            if (boton.classList.contains("activo")) {
                boton.classList.remove("activo");
                algoritmoSeleccionado = null;
                return;
            }

            // seleccionar uno nuevo
            botonesAlgoritmos.forEach(b => b.classList.remove("activo"));
            boton.classList.add("activo");
            algoritmoSeleccionado = boton.dataset.algoritmo;
        });
    });
}

export function obtenerAlgoritmoSeleccionado() {
    return algoritmoSeleccionado;
}

//-------------------

export function inicializarModal() {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");
    const cerrar = document.getElementById("modal-cerrar");

    const contenidos = {
        arregloModal: {
            titulo: "¿Qué es un arreglo?",
            texto: "Un arreglo o array es una estructura de datos que almacena múltiples elementos del mismo tipo en posiciones consecutivas de memoria. Por ejemplo [3,6,2,1,9]"
        },
        bigOModal: {
            titulo: "¿Qué es la notación Big-O?",
            texto: `Es una notación matemática en informática que describe la eficiencia o complejidad de un algoritmo, midiendo cómo su tiempo de ejecución
            o uso de memoria escalan con el tamaño de la entrada de datos (n). Permite comparar la eficiencia de diferentes algoritmos 
            (como O(1), O(log n), O(n), O(n²)) identificando su peor escenario o tasa de crecimiento, y es crucial para elegir la mejor solución para grandes 
            volúmenes de datos, ayudando a los programadores a predecir el rendimiento. `
        },
        inPlaceModal:{
            titulo: "¿Que es un algoritmo in-place?",
            texto: `Un algoritmo in-place es aquel que ordena o modifica los datos directamente en el mismo arreglo de entrada, utilizando una cantidad constante 
            o muy pequeña de memoria adicional. Es decir, no necesita crear estructuras auxiliares grandes para funcionar.`
        }
    };

    document.querySelectorAll(".link-modal").forEach(link => {
        link.addEventListener("click", () => {
            const tipo = link.dataset.modal;
            titulo.textContent = contenidos[tipo].titulo;
            texto.textContent = contenidos[tipo].texto;
            modal.classList.remove("hidden");
        });
    });

    cerrar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
}