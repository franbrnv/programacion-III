let k = 1;
let sumaPares = 0;

while (k <= 10) {
  if (k % 2 === 0) {
    sumaPares += k;
  }
  k++;
}

console.log("La suma de los números pares entre 1 y 10 es:", sumaPares);
