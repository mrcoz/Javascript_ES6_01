import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-services.js';



let b = {
  model: 'testing',
  type: 'car',
  miles: '1234',
  license: 'bnm123',
  latLong: '1',
  make: 'mine'
}
//console.log('we made it this far');
//let c = new Car('A123','asdf','lkj');
//c.miles = '234';
//c.model = 'testla';
//console.log(c.miles, c.model);

//console.log(c.license);
//c.start();

let dataService = new FleetDataService();
//dataService.loadData(fleet);
let asdf = dataService.loadCar(b);
console.log(asdf);
