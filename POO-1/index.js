class Persona {
  constructor(nombre, edad) {
    this.name = nombre;
    this.age = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} anios.`);
  }
}

const persona1 = new Persona("Juan", 25);
const persona2 = new Persona("Maria", 30);

persona1.saludar()
persona2.saludar()