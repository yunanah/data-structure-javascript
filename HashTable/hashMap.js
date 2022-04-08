// HashTable with Map
const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100

const object = { a: 1 };
table.set(object, "A1");
console.log(table.get(object)); // A1

table.delete(object);
console.log(table.get(object)); // undefined
console.log(table.keys()); // { 'key', 'key2' }
console.log(table.values()); // { 100, 'Hello' }

table.clear();
console.log(table.values()); // {  }
