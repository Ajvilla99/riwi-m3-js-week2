// Project initialization
console.log("Data Management with Objects, Sets, and Maps!");

// Define the products object
const products = {
  1: { id: 1, name: "Laptop", price: 1500 },
  2: { id: 2, name: "Mouse", price: 25 },
  3: { id: 3, name: "Keyboard", price: 50 },
};

console.log("Products object:", products);

// Create a Set with the names of the products
const uniqueProducts = new Set(
  Object.values(products).map((product) => product.name)
);
console.log("Set of unique products:", uniqueProducts);

// Create a Map to assign categories to products
const productCategories = new Map([
  ["Electronics", "Laptop"],
  ["Accessories", "Mouse"],
  ["Accessories", "Keyboard"],
]);

console.log("Map of products and categories:", productCategories);

// Iterate through the products object
for (const id in products) {
  console.log(`Product ID: ${id}, Details:`, products[id]);
}

// Iterate through the Set of products
for (const product of uniqueProducts) {
  console.log("Unique product:", product);
}

// Iterate through the Map of products
productCategories.forEach((product, category) => {
  console.log(`Category: ${category}, Product: ${product}`);
});

console.log("Data management tests completed:");
console.log("Product list (Object):", products);
console.log("Unique product list (Set):", uniqueProducts);
console.log("Categories and products (Map):", productCategories);
