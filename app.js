// Inicialización del proyecto
console.log('¡Gestión de Datos con Objetos, Sets y Maps!');

// Definir el objeto productos
const productos = {
  1: { id: 1, nombre: "Laptop", precio: 1500 },
  2: { id: 2, nombre: "Mouse", precio: 25 },
  3: { id: 3, nombre: "Teclado", precio: 50 }
};

console.log("Objeto productos:", productos);

// Crear un Set con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos únicos:", setProductos);

// Crear un Map para agregar categorías a los productos
const mapProductos = new Map([
  ["Electrónica", "Laptop"],
  ["Accesorios", "Mouse"],
  ["Accesorios", "Teclado"]
]);

console.log("Map de productos y categorías:", mapProductos);

// Recorrer el objeto productos
for (const id in productos) {
  console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

// Recorrer el Set de productos
for (const producto of setProductos) {
  console.log("Producto único:", producto);
}

// Recorrer el Map de productos
mapProductos.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria}, Producto: ${producto}`);
});

console.log("Pruebas completas de gestión de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos únicos (Set):", setProductos);
console.log("Categorías y productos (Map):", mapProductos);
