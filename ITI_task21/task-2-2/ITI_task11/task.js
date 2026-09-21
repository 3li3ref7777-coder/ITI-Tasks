// task 2
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Shape is an abstract class");
        }
    }

    area() {
        return 0;
    }

    parameter() {
        return 0;
    }

    toString() {
        return `Area: ${this.area()}, Parameter: ${this.parameter()}`;
    }
}



class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    parameter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Rectangle -> Area: ${this.area()}, Parameter: ${this.parameter()}`;
    }
}



class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    parameter() {
        return 4 * this.side;
    }

    toString() {
        return `Square -> Area: ${this.area()}, Parameter: ${this.parameter()}`;
    }
}



class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    parameter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle -> Area: ${this.area()}, Parameter: ${this.parameter()}`;
    }
}


export { Shape, Rectangle, Square, Circle };


// task 3
function* fibonacci(count) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < count; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

for (let num of fibonacci(7)) {
    console.log(num);
}
  console.log("-------------------")

function* fibonacci1(max1) {
    let a = 0;
    let b = 1;

    while (true) {
        if (a > max1) {
            break;
        }

        yield a;

        [a, b] = [b, a + b];
    }
}

for (let num of fibonacci1(20)) {
    console.log(num);
}



// task 4
let person = {
    name: "Ali",
    age: 21,

    [Symbol.iterator]: function* () {
        for (let key of Object.keys(this)) {
            yield [key, this[key]];
        }
    }
};

for (let [key, value] of person) {
    console.log(key, value);
}
