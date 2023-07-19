console.log('---------------- Object this -----------------');

const obj = {
  name: 'NolBu',
  age: 20,
  // 메서드 내부의 this는 이 메서드를 호출한 객체.
  display() {
    console.log(`${this.name} / ${this.age}`);
  },
};
// method를 호출한 객체. 즉 .앞의 객체 obj 객체가 display 메서드 내부에서 this로 참조된다
obj.display();
console.log('');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('Nolbu', 20);
nolbu.display();
console.log('');

// 전역의 this
// 브라우저 => window
// Node => globle
console.log(globalThis);

// Global 영역에 정의돤 함수의 this는 globalThis
globalThis.name = 'Window';
function onAdd() {
  console.log(this); // globalThis
  console.log(this.name); // globalThis
}
onAdd();
console.log('');

const user = {
  name: 'NolBu',
  onAdd: onAdd,
};
// onAdd를 호출한 것이 user라 this는 user가 된다.
user.onAdd();
