```markdown
🌐 Este README también está disponible en [English](README.md).
```

# 📦 Gestión de Datos con Objetos, Sets y Maps

Este proyecto demuestra cómo manejar estructuras de datos en JavaScript usando `Object`, `Set` y `Map` para organizar y acceder eficientemente a información sobre productos.

---

## 🚀 Tecnologías utilizadas

- JavaScript (ES6+)
- Node.js (Requerido para ejecución local)

---

## 📂 Estructura del proyecto

El proyecto contiene un único archivo principal donde se definen y manipulan diferentes estructuras de datos:

- **`Object`**: Para almacenar productos con identificadores únicos.
- **`Set`**: Para crear una colección de productos sin duplicados.
- **`Map`**: Para asociar categorías con productos.

---

## 📋 Descripción del código

### 1. Inicialización

```js
console.log("¡Gestión de Datos con Objetos, Sets y Maps!");
```

### 2. Inicialización

```js
const productos = {
  1: { id: 1, nombre: "Laptop", precio: 1500 },
  2: { id: 2, nombre: "Mouse", precio: 25 },
  3: { id: 3, nombre: "Teclado", precio: 50 },
};
```

### 3. Set de nombres unicos

```js
const setProductos = new Set(
  Object.values(productos).map((producto) => producto.nombre)
);
```

### 4. Mapa de categorías y productos

```js
const mapProductos = new Map([
  ["Electrónica", "Laptop"],
  ["Accesorios", "Mouse"],
  ["Accesorios", "Teclado"],
]);
```

### 5. Mapa de categorías y productos

```js
// Recorrer el objeto productos
for (const id in productos) {
  console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

// Recorrer el Set
for (const producto of setProductos) {
  console.log("Producto único:", producto);
}

// Recorrer el Map
mapProductos.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria}, Producto: ${producto}`);
});
```

### 6. Salida final

```js
console.log("Pruebas completas de gestión de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos únicos (Set):", setProductos);
console.log("Categorías y productos (Map):", mapProductos);
```

## ✅ Cómo ejecutar

```bash
git clone https://github.com/Ajvilla99/riwi-m3-js-week2.git
cd riwi-m3-js-week2.git
```

### 1. Ejecuta el archivo

```bash
node index.js
```

## 📌 Notas

- El Map sobrescribirá claves duplicadas. En este caso, la categoría "Accesorios" contendrá solo el último valor asignado ("Teclado").

- Para permitir múltiples productos por categoría, puedes estructurar el mapa así:

```js
const map = new Map([["Accesorios", ["Mouse", "Teclado"]]]);
```
