function greeting(person) {
   // Check `person` for "name" and "surname" attributes.

    if ("name" in person && "surname" in person){
        return `Hello, ${person.name} ${person.surname}!`;
    }else{
        return "Hello, stranger!"
    }

}

let bob = {
    name: "Bob",
    surname: "Thomson",
    age: 21,
};

let cat = {
    name: "Tom",
    breed: "Persian",
    age: 3,
};

let anonymous = {};

console.log(greeting(bob));        // Hello, Bob Thomson!
console.log(greeting(cat));        // Hello, stranger!
console.log(greeting(anonymous));  // Hello, stranger!
