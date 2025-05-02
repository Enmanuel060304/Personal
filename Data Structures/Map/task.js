let fruitWeights = new Map();  // Stores fruits weight in kilograms
fruitWeights.set("Orange", 0.28);
fruitWeights.set("Pineapple", 1.34);
fruitWeights.set("Apple", 0.217);
fruitWeights.set("Tomato", 0.09);

console.log(fruitWeights);

// Remove the pair with the key "Tomato"
fruitWeights.delete("Tomato");

// Add a new pair with the key "Pomelo" and weight 1.45
fruitWeights.set("Pomelo", 1.45);
console.log(fruitWeights);


const newMap = new Map();

newMap.set("hola mundo", 1);

console.log(newMap.get("hola mundo"));