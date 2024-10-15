const producto = {
  nombre: "Celular",
  precio: 1000,
  stock: 15,
};

console.log(producto);

producto.id = "01101293123";
producto.foto = "https://i/postimg.cc";
producto["detalle"] = "escribir el detalle del celular";
producto["color"] = "gris";

console.log(producto);

delete producto["id"];
delete producto.detalle;

console.log(producto);

console.log(producto.nombre);

console.log(producto["foto"]);
