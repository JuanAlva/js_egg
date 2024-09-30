function sumar(num1, num2) {
  const resultado = num1 + num2;
  console.log("El resultado de la suma es: " + resultado);
}

const primerSuma = sumar(10, 20);
console.log(primerSuma);
const segundaSuma = sumar(1, 100);
console.log(segundaSuma);
const terceraSuma = sumar(-100, 200);
console.log(terceraSuma);

const sumaTotal = primerSuma + segundaSuma + terceraSuma;
console.log("El resultado total es: " + sumaTotal);

const imprimirResultado = (num1, num2, operacion) => {
  if (operacion === "sumar") {
    const suma = num1 + num2;
    console.log("El resultado de la suma es: " + suma);
    return suma;
  } else if (operacion === "restar") {
    const resta = num1 - num2;
    console.log("El resultado de la resta es: " + resta);
    return resta;
  }
};

imprimirResultado(10, 20, "sumar");
imprimirResultado(10, 20, "resta");

const imprimirNumero = (numero) => console.log(numero);

imprimirNumero(20);
imprimirNumero(100);
imprimirNumero(-50);
