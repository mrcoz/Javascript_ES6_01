import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {fleet} from '../services/fleet-data.js';
import {FleetDataService} from '../services/fleet-data-services.js'

//let dataService = new FleetDataService();
//dataService.loadData(fleet);

//for (let car of dataService.cars)
//  console.log(car.license);

let a = new Car('123','abc','cde');
console.log('license: ' , a.license);
console.log('model: ' , a.model);

let droneId = 5;
console.log(droneId);

// console.log(typeof drones);
// console.log(drones instanceof Drone);
