interface Eating {
    eat(): void;
}

interface Moving {
    move(): void;
}

class Cat implements Moving, Eating {
    eat() {
        console.log("car eats...")
    }

    move() {
        console.log("car moves...")
    }
}

class Fish implements Eating {
    eat() {
        console.log("fish eats...")
    }
}