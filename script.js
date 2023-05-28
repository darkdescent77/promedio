// function para realizar la suma de las notas 
function sumaNotas(n1, n2, n3, n4, n5, n6){
    console.log("las notas son : ", n1, n2, n3, n4, n5, n6)
    return n1 + n2 + n3 + n4 + n5 + n6
}

// declaración const valor de la suma de las notas dadas 
const totalSuma = sumaNotas(6, 8, 9, 2, 5, 10)

// muestra en consola la cadena de texto más el valor total de la suma de las notas
console.log("la suma de las notas es " + totalSuma);

// divide por la cantidad de parámetros de la función sumaNotas()
function divideLength(){
    return totalSuma / sumaNotas.length
}

// declaración const del resultado de la función divideLength()
const promedio = divideLength();

// muestra en consola la cadena de texto seguido de el promedio de las notas 
console.log("el promedio es de: " + promedio)
