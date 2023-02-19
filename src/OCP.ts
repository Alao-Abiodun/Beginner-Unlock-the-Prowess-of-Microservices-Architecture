class Car {
    constructor(){}

    maker() {
        throw new Error("The draw method must be implemented in the subclass");
    }

}

class Toyoto extends Car {
    constructor(name: string) {
        super();
        this.name = name;
    }

    draw() {

    }
}

class Benz extends Car {
    constructor(color: string) {
        super();
        this.color = color;
    }

    draw() {

    }
}

class Jeep extends Car {
    constructor(model: string) {
        super();
        this.model = model;
    }
}