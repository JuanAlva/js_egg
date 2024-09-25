let totalApagar = 0; // Inicializacion de la variable que acumula el total a pagar

for (let i = 1; i <= 3; i++) {
    const nombre = prompt("Que producto desea llevar?");
    let cantidad = Number(prompt("cuantas unidades?"))
    let precio = Number(prompt("Cuanto sale cada unidada?"))

    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
}

console.log("El total a pagar es: " + totalApagar); 