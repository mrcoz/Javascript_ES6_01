import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataServices {
  constructor() {
    this.cars = [];
    this.drone = [];
    this.errors = []; // Errors Array
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          if (this.validateCarData(data)){
            let car = this.loadCar(data);
            if (car) {
              this.cars.push(car);
            }
          }
          else {
            let e = new DataError('invalid car data', data);
            this.errors.push(e);
          }
          break;
        case 'drone':
          this.drone.push(data);
          break;
        default:
          let e = new DataError('Invalid vehicle type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    }
    catch (e) {
      this.errors.push(new DataError('error loading car', car));
    }
    return null;
}

  validateCarData(car){
    let requiredProps = 'license model latLong miles make'.split(' ');
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError('invalid field ${field}'. car));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError('invalid mileage', car));
      hasErrors = true;
    }
    return !hasErrors;
  }

}
