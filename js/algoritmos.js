//ALGORITMOS DE ORDENAMIENTO

//BUBBLE SORT
export function bubbleSort(arr) {
    const copia = [...arr];   // copia el array original
    let n = copia.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (copia[j] > copia[j + 1]) {
                let aux = copia[j];         //
                copia[j] = copia[j + 1];    // intercambiar valores
                copia[j + 1] = aux;         //
            }
        }
    }

    return copia;
}

//SELECTION SORT
export function selectionSort(arr) { 
    const copia = [...arr];
    let n = copia.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (copia[j] < copia[min]){
                min = j;
            }
        }
        // otra forma mas corta de intercambiar valores
        [copia[i], copia[min]] = [copia[min], copia[i]];
    }
    return copia;
}

//INSERTION SORT
export function insertionSort(arr){
    const copia = [...arr];
    let n = copia.length;

    for (let i = 1; i < n ; i++) {
        let k = copia[i];
        let j = i - 1;

        while (j >= 0 && copia[j] > k) {
            copia[j + 1] = copia[j];
            j--;
        }
        copia[j + 1] = k;
    }
    return copia;
}

//QUICK SORT
export function quickSort(arr) {
    const copia = [...arr];
    if (copia.length <= 1) {
        return copia;
    }

    let pivot = copia[copia.length - 1];    //el pivot en este caso sera el ultimo elemento
    let izq = [];
    let der = [];

    for (let i = 0; i < copia.length - 1; i++) {
        if (copia[i] < pivot) {
            izq.push(copia[i]);   //dejar los elementos menores al pivot del lado izquierdo del mismo
        } else {
            der.push(copia[i]);   //dejar los elementos mayores al pivot del lado derecho del mismo
        }
    }

    //recursividad
    let izquierdaOrdenada = quickSort(izq);       
    let derechaOrdenada = quickSort(der);       

    let resultado = [];

    //concatenar los arrays ya ordenados
    resultado = resultado.concat(izquierdaOrdenada);
    resultado.push(pivot);
    resultado = resultado.concat(derechaOrdenada);

    return resultado;
}

//MERGE SORT
//funcion que crea las particiones del array
export function mergeSort(arr) {
    const copia = [...arr];
    if (copia.length <= 1) {
        return copia; // caso base
    }

    let medio = Math.floor(copia.length / 2); //"medio" contendrá la mitad de la longitud (número de elementos) del array arr, redondeando hacia abajo al número entero más cercano

    let izquierda = copia.slice(0, medio);    //crea un array "izquierda" que contiene una copia de los elementos de arr, desde el índice 0 (inicio) hasta el índice medio (sin incluirlo)
    let derecha = copia.slice(medio);   // crea un array "derecha", que contiene los elementos de arr desde medio hasta el final

    //recursividad
    let izquierdaOrdenada = mergeSort(izquierda);
    let derechaOrdenada = mergeSort(derecha);

    return merge(izquierdaOrdenada, derechaOrdenada);
}

//funcion que ordena las particiones
function merge(izq, der) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izq.length && j < der.length) {
        if (izq[i] < der[j]) {
            resultado.push(izq[i]);
            i++;
        } else {
            resultado.push(der[j]);
            j++;
        }
    }
    // lo que sobra
    while (i < izq.length) {
        resultado.push(izq[i]);
        i++;
    }

    while (j < der.length) {
        resultado.push(der[j]);
        j++;
    }

    return resultado;
}

export const algoritmos = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quickSort
};