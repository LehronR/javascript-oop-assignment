// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#


class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor(){
        return this.color;
    }
}

// WANTED PRACTICE WITH CREATING SUBCLASSES AND THEIR FUNCTIONALITY
class Ford extends Car {
    constructor(make, model, year, color, engineSound) {
        super(make, model, year, color);
        this.engineSound = engineSound;
    }
    startEngine() {
        return this.engineSound;
    }
}

let mustang = new Ford('Ford','Mustang', 1969, 'Black', 'GROOOWWLLLL');

console.log(mustang);
console.log(mustang.make);
console.log(mustang.model);
console.log(mustang.year);
console.log(mustang.color);
console.log(mustang.engineSound);

let camero = new Car('Chevrolet', 'Camero', 2020, 'black', 'VAROOOMMMM');

console.log(camero);
console.log(camero.make);
console.log(camero.model);
console.log(camero.year);
console.log(camero.color);