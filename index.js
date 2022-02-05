// Task 1
console.log("task 1");

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return super.introduce() + `  Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.legs = 4;
    this.species = "Dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
let labrador = new Dog("Pup", 6, "busy", "Bill");
console.log(labrador.greetMaster());
console.log(labrador.name);

let fur = new Cat("FUR", 6, "busy");
console.log(fur.introduce());
console.log(fur.name);

// Task 2
console.log("task 2");

class NumberCollector {
  constructor() {
    this.list = [];
    this.length = 0;
  }
  // Мне кажется метод был бы лучше, но в задании указано именно свойство lehgth
  // getLength() {
  //   return this.list.length;
  // }

  add(x) {
    this.list.push(x);
    this.list.sort((a, b) => a - b);
    this.length += 1;
  }
  get(i) {
    return this.list[i];
  }
}
let numbers = new NumberCollector();
numbers.add(5);
numbers.add(10);
numbers.add(1);
numbers.add(6);
console.log(numbers.list);
console.log(numbers.length);
// console.log(numbers.getLength());
console.log(numbers.get(3));

// Task 3
console.log("task 3");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`;
  }
  getInfo() {
    return this.info;
  }
}

var john = new Person("john", 34);
console.log(john.info);
console.log(john.getInfo());
