import $ from 'jquery';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-services.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase {
  constructor() {
    super('Feet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', null);
    this.addRoute('Map', new MapPage);
  }
}

export let application = new App();
application.show($('body'));
