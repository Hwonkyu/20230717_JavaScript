console.log('---------------- [692] Change Prototype -----------------');

const one = {
  name: 'One',
  display: function () {
    console.log(this.name);
  },
};

// const two = new Object();
const two = {
  name: 'Two',
};
// console.log(two);

// two의 부모 객체는 one이 된다.
// one의 부모 객체는 Object
Object.setPrototypeOf(two, one);
console.log(two);
two.display();

const three = {};
Object.setPrototypeOf(three, two);

console.log(three);
three.display();

console.log('---------------- 생성자의 prototype 동적 변경 확인 -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  show() {
    console.log(`${this.name} / ${this.age}`);
  },
  getName() {
    console.log(`${this.name}`);
  },
};

// 추가 형식으로 밑에 기술하면 모두 사용 가능하다
Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.show();
nolbu.display();
console.log(nolbu);
console.log('');

console.log('---------------- 인스턴스의 prototype 동적 변경 확인 -----------------');

function Employee(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype = {
  constructor: Employee,
  show() {
    console.log(`${this.name} / ${this.age}`);
  },
  getName() {
    console.log(`${this.name}`);
  },
};

const emp = new Employee('Emp', 20);
console.log(emp);
emp.show();
