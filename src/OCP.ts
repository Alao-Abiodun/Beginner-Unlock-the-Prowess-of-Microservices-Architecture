class Car {
    constructor(){}

    maker() {
        throw new Error("The draw method must be implemented in the subclass");
    }

}

class Toyoto extends Car {
    constructor(name: string) {
        super();
        console.log(name);
    }

    draw() {

    }
}

class Benz extends Car {
    constructor(color: string) {
        super();
        console.log(color);
    }

    draw() {

    }
}

class Jeep extends Car {
    constructor(model: string) {
        super();
        console.log(model);
    }
}