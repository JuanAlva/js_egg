const comprar = () => {
  let totalApagar = 0; // Inicializacion de la variable que acumula el total a pagar

  for (let i = 1; i <= 3; i++) {
    const nombre = prompt("Que producto desea llevar?");
    let cantidad = Number(prompt("cuantas unidades?"));
    let precio = Number(prompt("Cuanto sale cada unidada?"));

    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }

  console.log("El total a pagar es: " + totalApagar);
  return totalApagar;
};

const total1 = comprar();
console.log("El total del primer cliente es: " + total1);
const total2 = comprar();
console.log("El total del segundo cliente es: " + total2);
const total3 = comprar();
console.log("El total del tercer cliente es: " + total3);
const total = total1 + total2 + total3;
console.log("El total de la compra es: " + total);
