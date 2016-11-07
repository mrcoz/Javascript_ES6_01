import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  getCarByLicense(license) {
    return this.cars.find(function(car) {
      return car.license === license;
    })
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          if (this.validateCarData(data)){
            let car = this.loadCar(data);
            if (car) this.cars.push(car);
          }
          else {
            let e = new DataError('Invalid Car Data', data);
            this.errors.push(e);
          }
          break;
        case 'drone':
          this.drones.push(data);
          break;
        default:
          let e = new DataError('Invalid Data Type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    try {
    let c = new Car(car.license, car.model, car.latLong);
    c.make = car.make;
    c.miles = car.miles;
    return c;
    }
    catch(e) {
      this.errors.push(new DataError('Error with Car Data'), car);
    }
    return null;
  }

  validateCarData(car) {
    let requiredProperties = 'license model make miles latLong'.split(' ');
    let hasErrors = false;
    for (let field of requiredProperties) {
      if (!car[field]) {
        this.errors.push(new DataError(`Car Field Missing: ${field}`, car));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError(`Car Milage not a number: ${car.miles}`, car));
      hasErrors = true;
    }
  return !hasErrors;
  }

}
