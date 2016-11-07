// ES5 Standard
// Javascript Simple Object Notation
var a = new Object();
a.name = "A Name";
a.securitylevel = 15;
a.updateDueDate = function () {
  return true;
}
// Dot Notation
console.log(a.name);
console.log(a.updateDueDate);

// Bracket Notation
console.log(a['securitylevel']);

var field = 'securitylevel';
console.log(a[field]);

// JSON Notation to create an empty Object
var project = {};
project.name = 'Project Name';
console.log(project.name);

// JSON (Object Creation) with parameters
var b = {
  name: 'Project B',
  securitylevel: 15,
  updateDueDate: function () {
    return true;
  },
  team: ['a','b','c'],
  task: [
    { taskName: 'first'},
    { taskName: 'second'}
  ]
}
console.log(b.name);

console.log(b.task[1].taskName);


// Event Handlers
// HTML
<input id="submit1" type="button" />

// Javascript File
var button = document.getElementsByid('submit1');
button.addEventListener('click', function () {
  console.log('Button Clicked');
});
button.addEventListener('click', function () {
  console.log('Another Listener Function');
});
// or
var = submitHandler = function formSubmitHandler() {
  console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler);
button.removeEventListener('click', submitHandler);

// Event Bubbling

// HTML
<div id="div1" >
<div id="div2">
</div>
</div>
// Javascript
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
};
div1.addEventListener('click', clickHandler, false);
div2.addEventListener('click', clickHandler, false);
// Child 1st - 3rd argument false

div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
// Parent 1st - 3rd argument true

// or
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
  event.stopPropogation();
  event.preventDefault();
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
// Parent 1st - only Parent

// Built in Objects and Functions
// Global Functions MDN
var value = parseInt('1234.5');
console.log('value');
var value = parseFloat('1234.5');
console.log(encodeURI('//start//'));

// Math
// String
// arguments


// classes, constructor, getters and setters
// Each Class should be broken out into its own file
class ClassName {
  constructor(id) {
    this._id = id; // _id private variable
  }
  get id() { // getter, you can add validation or additional processing
    return this.id;
  }
  set id(value) { // setter
    this.id = value;
  }
}

class A {
  constructor() {

  }
}

class B extends A {
  constructor() {

  }
}
