🌐 This README is also available in [Spanish](README.es.md).

# 📦 Data Management with Objects, Sets, and Maps

This project demonstrates how to handle data structures in JavaScript using Object, Set, and Map to efficiently organize and access product information.

---

## 🚀 Technologies Used

- JavaScript (ES6+)
- Node.js (Required for local execution)

---

## 📂 Project Structure

The project contains a single main file where different data structures are defined and manipulated:

- **`Object`**: To store products with unique identifiers.
- **`Set`**: To create a collection of products without duplicates.
- **`Map`**: To associate categories with products.

---

## 📋 Code Description

### 1. Initialization

```js
console.log("Data Management with Objects, Sets, and Maps!");
```

### 2. Object Initialization

```js
const products = {
  1: { id: 1, name: "Laptop", price: 1500 },
  2: { id: 2, name: "Mouse", price: 25 },
  3: { id: 3, name: "Keyboard", price: 50 },
};
```

### 3. Set of Unique Names

```js
const productSet = new Set(
  Object.values(products).map((product) => product.name)
);
```

### 4. Map of Categories and Products

```js
const productMap = new Map([
  ["Electronics", "Laptop"],
  ["Accessories", "Mouse"],
  ["Accessories", "Keyboard"],
]);
```

### 5. Iterating Through Data Structures

```js
// Iterate through the products object
for (const id in products) {
  console.log(`Product ID: ${id}, Details:`, products[id]);
}

// Iterate through the Set
for (const product of productSet) {
  console.log("Unique Product:", product);
}

// Iterate through the Map
productMap.forEach((product, category) => {
  console.log(`Category: ${category}, Product: ${product}`);
});
```

### 6. Final Output

```js
console.log("Completed data management tests:");
console.log("Product List (Object):", products);
console.log("Unique Product List (Set):", productSet);
console.log("Categories and Products (Map):", productMap);
```

---

## ✅ How to Run

```bash
git clone https://github.com/Ajvilla99/riwi-m3-js-week2.git
cd riwi-m3-js-week2.git
```

### 1. Run the File

```bash
node index.js
```

---

## 📌 Notes

- The Map will overwrite duplicate keys. In this case, the "Accessories" category will only contain the last assigned value ("Keyboard").

- To allow multiple products per category, you can structure the Map like this:

```js
const map = new Map([["Accessories", ["Mouse", "Keyboard"]]]);
```
