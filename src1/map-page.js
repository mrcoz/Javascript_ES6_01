import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app21.js';

export class MapPage extends Page {
  constructor() {
    super('Map');
  }

  createElement() {
    super.createElement();
  }

  getElementString() {
    return '<div style="margin: 20px;"><h3>Map</h3></div>';
  }
}
