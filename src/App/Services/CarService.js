// Import de service
import { Service } from "./Service";

// Import de class
import { Car } from "../Entities/Car";

// Import de donnée
import carData from '../../../Data/car.json';

export class CarService extends Service {
    readAll() {
        let result = [];

        for (let car of carData.cars) {
            let objCar = new Car(car)
            result.push(objCar);
        }

        // Sur une ligne
        /*
        for (let car of carData.cars)
            result.push(new Car(car));
        */

        return result;
    }

    readById(id) {
        // Array.filter
        let result = carData.cars.filter(cars => cars.id === id);

        return result.length > 0 ? new Car(result[0]) : null;
    }
}