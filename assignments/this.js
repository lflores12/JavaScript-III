/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is what "this" will always want to default to. The larger area of scope.
* 2. implicit binding is when you use dot notation and specify it that way. so whatever is to the left of the dot is what it will refer to.
* 3. explicit binding is when you are using specific methods like .call and .apply
* 4. New binding is when we have a constructor function and are using new objects to refer to. 
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  console.log(sayName("Leo"));



// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Leo');  //myObj is left of the dot. so when "this" is used in the function within myObj, it knows we are referring to myObj because "this" is bound to myObj.
// code example for Implicit Binding

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Jerry');
  const newman = new CordialPerson('Newman');
  
  newman.speak();
  jerry.speak();

// code example for New Binding

// Principle 4


jerry.speak.call(newman); //with the call method, we are assigning whatever is in newman to replace what was in jerry.
// code example for Explicit Binding