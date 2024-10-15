class Persona {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
  }

  comer(cantidad) {
    this.vida = this.vida + cantidad
    console.log("La vida de "+this.nombre+" acaba de aumentar a: "+this.vida)
  }
  entrenar(cantidad) {
    this.vida = this.vida - cantidad
    console.log("La vida de "+this.nombre+" acaba de disminuir por entrenamiento")
  }
}

const juan = new Persona("juan", 25);
const marta = new Persona("maria", 30);

console.log(juan);
console.log(marta);

juan.comer(10)
juan.comer(50)
juan.comer(5)
juan.entrenar(30)

marta.comer(20)
marta.entrenar(50)
marta.comer(40)