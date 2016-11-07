export class Vehicle {
  constructor(licenseNum) {
    console.log('constructing vehicle');
    this.licenseNum = licenseNum;
  }
  start() {
    console.log('starting vehicle');
  }
  static getCompanyName() {
    console.log('my company');
  }
}
