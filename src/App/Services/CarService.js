// Import de class
import { Service } from "./Service";

import { Car } from "../Entities/Car";

import carData from '../../../Data/car.json';

export class CarService extends Service {
    readAll() {
        let result = [];

        for (let car of jsonCars.cars) {
            let objCar = new Car(car)
            result.push(objCar);
        }

        return carData.cars;
    }

    readById(id) {
        // Array.filter
        let result = carData.cars.filter(cars => cars.id === id);

        return result.length > 0 ? result[0] : null;
    }
}