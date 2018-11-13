// Object

// objects can have special properties called a method
//Methods are properties that are a function
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  }
};
duck.sayName();
// Returns "The name of this duck is Aflac."

// Using the key word this

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + this.name + ".";
    // this refers to the object which is duck
  }
};
duck.sayName();
// Returns "The name of this duck is Aflac."

// The following code is a constructor
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
// defines the object bird  with properties such as name, color, numlegs

// Constructor conventions
// Defined with capitalized name so Bird not bird
// use the keyword this to set properties of the object
// defines properties and behaviors instead of returning a value like a function might

// Use a Constructor to Create Objects ***
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
// the keyword new tells JS to create a new instance of Bird called blueBird

// Extend Constructors to Receive Arguments
// now you assign values to the proeperities for each respective new object you create instead of manually changing the values;
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

instanceOf;
blueBird instanceof Bird; // returns true
// tells you with a boolean whether or not an object was made with a particular constructor
// if so, it will return true else return false

// Own Properties ***
// name, color, numLegs are own peroperties because they are defined directly into the instance object

// Use Prototype Properties to Reduce Duplicate Code    ***
prototype is an object that is shared amongst all instances of an Object
Bird.prototype.numLegs = 2;
// now all instances of Bird have the numLegs property


function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property
//set all prototypes before you instaniate a new instance of the object unless you dont want that instance to have that property

let duck = new Bird("Donald");

// Understand the Constructor Property ***
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true

// Change the Prototype to a New Object ***

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};
// more of an efficient way to set prototypes in a new obejct

// manually setting the prototype of a new object erases the  constructor property

// therefore you have to manually add the constructor in the new object

function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog, // here is where the constructor was added
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};

// Understand the Prototype Chain
// object's prototype itself is an object
// because a prototype is an object, a prototype can have its own prototype
// Any object can use the hasOwnProperty method

//Inhertiance 
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

// two new instances of Animal object

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 

// Set the Child's Prototype to an Instance of the Parent *****

// Same Animal constructor as created above 

// Same Animal prototype as created above

function Dog() { }

// Dog inherits all of Animal's properties including the eat method
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat();  //  print "nom nom nom"

// Reset an Inherited Constructor Property *****
// when an object inherits its prototype from another object, it also inherits the parent (supertype's) constructor as well
// you have to manualluy set the constructor of the given obj as shown below
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

// Add Methods After Inheritance
// Inherited prototyped can still have its own methods in its constructor 
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Inherit the Animal prototype 
Dog.prototype = Object.create(Animal.prototype)
// create own specialized method for Dog which is to bark
Dog.prototype.bark = function () { console.log('Woof!') }
// resetting the constructor of Dog from Animal to Dog
Dog.prototype.constructor = Dog;
//create a new instance of the dog object
let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

// Example on how to inherit methods from another object by cloning its prototype object *****
ChildObject.prototype = Object.create(ParentObject.prototype);

// Override Inherited Methods ******
If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here ? No.
2. Bird => Is eat() defined here ? => Yes.Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

  // to overwrite, reassign the method to a new function
  Dog.prototype.bark = function () {
    console.log('bark bark bark ')
  }

// Use a Mixin to Add Common Behavior Between Unrelated Objects ******
// A Mixin allows otheer objects to use a collection of functions
let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  }
};
// bird and plane are passed into flymixin, which assigns the fly function to each object
flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"

// Use Closure to Protect Properties Within an Object from Being Modified Externally *****
// a function always has access to the context in which it was created aka a Closure
function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function () { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

// Understand the Immediately Invoked Function Expression (IIFE)
// executes a function as soon as it is declared
(function () { console.log('IIFE') })

// practial usage
/* used to group related functionality into a single object or module. 
advantage of a module pattern is that all of the methods can be packaged into a single object that can then be used by other parts of your code */
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

// the funModule object contains all of the mixin methods/behoaviors as prooperties of the object