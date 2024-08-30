const puntaje = prompt("Ingrese el puntaje de la evaluación (1-10):");
if (puntaje === 10) {
    console.log("¡Excelente!");
} else if (puntaje === 8 || puntaje === 9) {
    console.log("¡Muy bien!");
} else if (puntaje === 6 || puntaje === 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}