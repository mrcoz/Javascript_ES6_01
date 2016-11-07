import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
 constructor(licenseNum) {
   super(licenseNum);
   console.log('constructing car');
 }
 start() {
   super.start();
   console.log('starting car');
 }
 static getCompanyName() {
   super.getCompanyName();
   console.log('my other company');
 }
}
