import {Page} from './framework/page.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {application} from './app21.js';

export class HomePage extends Page {
  constructor() {
    super('Home');
  }

  createElement() {
    super.createElement();

    let i = new Image('../images/IMG_6387.jpeg');
    i.appendToElement(this.element);

    let styleString = 'width: 300px; height: 80px; font-size: 16px ';
    let b = new Button('Self Driving Car');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Cars'));

    b = new Button('Drones');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Drones'));

  }

  getElementString() {
    return '<div style="text-align: center;"></div>';
  }
}
