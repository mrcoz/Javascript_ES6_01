import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app21.js';

export class CarsPage extends Page {
  constructor() {
    super('Cars');
  }

  createElement() {
    super.createElement();

    let headers = "license model miles make".split(' ');
    let dt = new DataTable(headers, application.dataService.cars);
    dt.appendToElement($(this.element));
  }

  getElementString() {
    return '<div style="margin: 20px;"><h3>Cars</h3></div>';
  }
}
