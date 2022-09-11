//let firstName = "John";
//let age = 35;
//let favoriteIceCream = "Strawberry";

let person = {
    firstName: "John", 
    age: 35,
    favoriteIceCream: "Strawberry",
    vehicle: {
        model: 'Hyundai',
    }
}

console.log(`My name is ${person.firstName}.`);
console.log(`My age is ${person.age}.`);
console.log(`My favorite ice cream is ${person.favoriteIceCream}.`);
console.log(`I own a ${person.vehicle.model}.`);
