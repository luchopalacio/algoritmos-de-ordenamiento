import { inicializarUI, obtenerAlgoritmoSeleccionado, inicializarModal } from "./ui.js";
import { algoritmos } from "./algoritmos.js";
import { detallesTecnicos } from "./detallesTecnicos.js";

document.addEventListener("DOMContentLoaded", () => {

    inicializarUI();
    inicializarModal();

    const btnOrdenar = document.querySelector(".btn-ordenar");
    const btnClear = document.getElementById("btn-clear");
    const inputArray = document.getElementById("inputArray");
    const bloqueResultados = document.getElementById("bloqueResultados");
    const salida = document.getElementById("salidaResultado");

    //LIMPIAR
    btnClear.addEventListener("click", () => {
        salida.textContent = "—";
        bloqueResultados.classList.add("hidden");
    });

    //ORDENAR
    btnOrdenar.addEventListener("click", (e) => {
        e.preventDefault();

        const algoritmo = obtenerAlgoritmoSeleccionado();

        if (!algoritmo) {
            alert("Primero seleccioná un algoritmo");
            return;
        }

        const arrayOriginal = parsearArray(inputArray.value);

        if (!arrayOriginal) {
            alert("Ingresá solo números separados por comas");
            return;
        }

        const resultado = algoritmos[algoritmo](arrayOriginal);

        mostrarResultado(resultado);
        mostrarDetalles(algoritmo);
    });
});


//FUNCIONES AUXILIARES
function parsearArray(texto) {
    if (!texto.trim()) return null;

    const numeros = texto
        .split(",")
        .map(n => Number(n.trim()));

    if (numeros.some(n => Number.isNaN(n))) return null;

    return numeros;
}

function mostrarResultado(array) {
    const salida = document.getElementById("salidaResultado");
    const bloque = document.getElementById("bloqueResultados");

    salida.textContent = `[ ${array.join(" , ")} ]`;
    bloque.classList.remove("hidden");
}

function mostrarDetalles(algoritmo) {
    const info = detallesTecnicos[algoritmo];

    document.getElementById("comparaciones").textContent = info.comparaciones;
    document.getElementById("intercambios").textContent = info.intercambios;
    document.getElementById("complejidad").textContent = info.complejidad;
    document.getElementById("estable").textContent = info.estable;
    document.getElementById("inPlace").textContent = info.inPlace;
}
