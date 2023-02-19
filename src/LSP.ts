class Vehicle {
    startEngine() {
        throw new Error('The startEngine() method should be implemented in the subclass');
    }

    stopEngine() {
        throw new Error('The stopEngine() method should be implemented in the subclass');
    }
}

class CarType extends Vehicle {
    startEngine() {
        throw new Error('start engine of the car');
    }

    stopEngine() {
        throw new Error('stop engine of the car');
    }
}

class MotorcycleType extends Vehicle {
    startEngine() {
        throw new Error('start engine of the motorcycle');
    }

    stopEngine() {
        throw new Error('stop engine of the motorcycle');
    }
}

const runVehicle = (vehicle: any) => {
    console.log(vehicle.startEngine());

    console.log(vehicle.stopEngine());
}

const vehicleA = new CarType();
const vehicleB = new MotorcycleType();

runVehicle(vehicleA);
runVehicle(vehicleB);