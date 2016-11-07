import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-services.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';

/*
Start with one base application class, and everything is included in it.
- Single application object (best practice)
- src/framework
Setting Routes - route to different pages based on menu selection
Create Pages to route too.
*/

//let c = new Car('A123','asdf','lkj');
//c.miles = '234';
//c.model = 'testla';
//console.log(c.miles, c.model);

//console.log(c.license);
//c.start();
//Car.getCompanyName();
// c.getCompanyName(); // Error, Must be used on Class
let tb = new TitleBar('MyApplication');
tb.addLinks('Home', ' ');
tb.addLinks('Trailer', ' ');
tb.addLinks('Car', ' ');
tb.appendToElement($('body'));

let headers = "license model miles make".split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));




/*
let b = new Button('Click Me');
b.appendToElement($('body'));

let i = new Image('../images/IMG_6387.jpeg');
i.appendToElement($('body'));

*/
//console.log(fleet);

for (let car of dataService.cars){
  console.log(car.license);
}

for (let e of dataService.errors){
  console.log(e.message);
}

let carL = dataService.getCarByLicense('fcd1231');
console.log(carL);
