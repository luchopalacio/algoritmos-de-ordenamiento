export const detallesTecnicos = {
    bubble: {
        comparaciones: "O(n²)",
        intercambios: "O(n²)",
        complejidad: "O(n²)",
        estable: "Sí",
        inPlace: "Sí"
    },
    selection: {
        comparaciones: "O(n²)",
        intercambios: "O(n)",
        complejidad: "O(n²)",
        estable: "No",
        inPlace: "Sí"
    },
    insertion: {
        comparaciones: "O(n²) / O(n)",
        intercambios: "O(n²)",
        complejidad: "O(n²)",
        estable: "Sí",
        inPlace: "Sí"
    },
    quick: {
        comparaciones: "O(n log n)",
        intercambios: "O(n log n)",
        complejidad: "O(n log n)",
        estable: "No",
        inPlace: "Sí"
    },
    merge: {
        comparaciones: "O(n log n)",
        intercambios: "O(n)",
        complejidad: "O(n log n)",
        estable: "Sí",
        inPlace: "No"
    }
};