import $ from 'jquery';

export class BaseElement {
  constructor() {
    this.element = null; // JQuery Object
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'Please override getElementString in BaseElement';
  }

  enableJS() {
    //console.log(this.element[0]);
    componentHandler.upgradeElement(this.element[0]);
  }

}
