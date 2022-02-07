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

// Task 4
console.log("task 4");

class HallOfFame {
  constructor(size = 5, players) {
    this.list = players
      ? players
          .sort((a, b) => b[1] - a[1])
          .reduce((acc, currValue, index) => {
            if (acc.length < size) {
              acc.push(currValue.join(": "));
            }
            if (index === players.length - 1) {
              for (let i = size - players.length; i > 0; i -= 1) {
                acc.push("");
              }
            }
            return acc;
          }, [])
      : (function () {
          let array = [];
          for (let i = 0; size > i; i++) {
            array.push("");
          }
          return [...array];
        })();
  }
  get list() {
    return this._list;
  }
  set list(arg) {
    this._list = arg;
  }
  add(x) {
    if (this.list.includes("")) {
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if (element === "") {
          const arr = this.list.slice(0, index);
          arr.push(x.join(": "));
          arr.sort((a, b) => {
            if (parseInt(b.match(/\d+/)) === parseInt(a.match(/\d+/))) {
              return a.localeCompare(b);
            } else {
              return parseInt(b.match(/\d+/)) - parseInt(a.match(/\d+/));
            }
          });
          this.list.splice(0, arr.length, ...arr);
          return this;
        }
      }
    } else {
      if (
        this.list
          .map((element) => element.substring(0, element.search(":")))
          .includes(x.join(": ").substring(0, x.join(": ").search(":")))
      ) {
        let index = this.list
          .map((element) => element.substring(0, element.search(":")))
          .indexOf(x.join(": ").substring(0, x.join(": ").search(":")));
        if (
          parseInt(this.list[index].match(/\d+/)) <
          parseInt(x.join(": ").match(/\d+/))
        ) {
          this.list.splice(index, 1, x.join(": "));
        }
        this.list.sort((a, b) => {
          if (parseInt(b.match(/\d+/)) === parseInt(a.match(/\d+/))) {
            return a.localeCompare(b);
          } else {
            return parseInt(b.match(/\d+/)) - parseInt(a.match(/\d+/));
          }
        });
      } else {
        this.list.push(x.join(": "));
        this.list
          .sort((a, b) => {
            if (parseInt(b.match(/\d+/)) === parseInt(a.match(/\d+/))) {
              return a.localeCompare(b);
            } else {
              return parseInt(b.match(/\d+/)) - parseInt(a.match(/\d+/));
            }
          })
          .pop();
      }
      return this;
    }
  }
}

var top3 = new HallOfFame(3, [
  ["Ada", 99],
  ["Bob", 42],
  ["Clo", 101],
  ["Dan", 3],
]);
// ... create a Hall of size 3 and (try) to add 4 players

top3.list;
// -> ["Clo: 101", "Ada: 99", "Bob: 42"]
// ... only 3 players kept 'cause size of the Hall is 3

top3.add(["Dan", 54]);
console.log(top3.list);
// -> ["Clo: 101", "Ada: 99", "Dan: 54"]
// ... Dan entered the list 'cause is score is better than Bob's

console.log(top3.add(["Eva", 75]).add(["Fox", 120]).list);
// --> ["Fox: 120", "Clo: 101", "Ada: 99"]
// ... 2 new players added using chaining

var top5 = new HallOfFame();
// ... create an empty Hall of size 5 (by default)

top5.add(["A", 4]).add(["E", 3]).add(["I", 1]);
// ... add 3 players

console.log(top5.list);
// --> ["A: 4", "E: 3", "I: 1", "", ""]
// ... 2 "empty players" at the end of list

top5.add(["S", 5]).add(["T", 7]);
console.log(top5.list);
// --> ["T: 7", "S: 5", "A: 4", "E: 3", "I: 1"]
// ... 2 more players, no more "empty slot"

console.log(top5.add(["A", 25]).list);
// console.log(top5.list);
// --> ["A: 25", "T: 7", "S: 5", "E: 3", "I: 1"]
// ... add "A" with a new (better) score then it moves to 1st place !

console.log(top5.add(["T", 6]).list);
// --> ["A: 25", "T: 7", "S: 5", "E: 3", "I: 1"]
// ... try to add "S" with a lesser score then no change !

// Task 5
console.log("task 5");

function menStillStanding(cards) {
  let A = new Array(11).fill(0);
  let B = new Array(11).fill(0);

  for (let card of cards) {
    if (card[0] === "A") {
      A[card.slice(1, -1) - 1] += card.slice(-1) === "Y" ? 1 : 2;
    }
    if (card[0] === "B") {
      B[card.slice(1, -1) - 1] += card.slice(-1) === "Y" ? 1 : 2;
    }
    if (A.filter((n) => n < 2).length < 7) break;

    if (B.filter((n) => n < 2).length < 7) break;
  }

  return [A.filter((n) => n < 2).length, B.filter((n) => n < 2).length];
}

console.log(menStillStanding([]));
console.log(menStillStanding(["A4Y", "A4Y"]));
console.log(menStillStanding(["A4Y", "A4R"]));
console.log(menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]));
console.log(menStillStanding(["A4R", "A4R", "A4R"]));
console.log(menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"]));
