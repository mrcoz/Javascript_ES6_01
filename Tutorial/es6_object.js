class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    // or Private Variable ._VariableName
    this._id = id;
  }

// Getters
  get id() {
    return this._id;
  }

// Setters
  set id(value) {
    this._id = value;
  }

// Static Method (only exits on Class)
  static getCompany() {
    console.log('in getCompany');
  }
// Method
  fly () {
    console.log('Drone ' + this.id + 'is flying');
  }
}
// Static Properties / Class Properties
Drone.maxHeight = 2000;

// Instanciate Drone
let drone = new Drone('A123', Flyer);

drone.fly();

// ***********************************************************************
// Inheritance - Extending a Class

class Vehicle {
  constructor(licNum) {
    this.licNum = licNum;
    this.gpsEnabled = true;
    console.log('constructing Vehicle');
  }
}
// Inheritance from Vehicle
class Drone extends Vehicle {

}
class Car extends Vehicle {
  constructor(licNum) {
    super(licNum); // you have to call super in constructor if using Inheritance
    this.gpsEnabled = false;
    console.log('constructing Car');
  }
}

let c = new Car();
let d = new Car('A123');
console.log(c instanceof Object);

// ***
class Vehicle {
  start() {
    console.log('starting Vehicle');
  }
  static getCompanyName() {
    console.log('My Company');
  }
}
// Inheritance from Vehicle
class Drone extends Vehicle {

}
class Car extends Vehicle {
  // overriding Method
  start() {
    start.start();
    console.log('starting Car');
  }
  static getCompanyName() {
    console.log('My Company');
  }
}

let c = new Car();
let d = new Car('A123');
console.log(c instanceof Object);
