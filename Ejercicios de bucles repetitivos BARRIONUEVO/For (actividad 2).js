let suma = 0;
let resultado = "";

for (let i = 1; i <= 10; i++) {
  suma += i;
  if (i < 10) {
    resultado += `${i} + `;
  } else {
    resultado += `${i} = `;
  }
}

resultado += suma;
console.log(resultado);
