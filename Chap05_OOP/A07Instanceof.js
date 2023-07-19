console.log('----------------- Instanceof -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

// 기본형의 타입 체크는 typeof, 참조형은 instanceof 또는 constructor를 이용
// instanceof => 누구에 의해 만들어진 객체니? 프로토타입을 거슬러 올라가면서 체크한다
console.log(nolbu instanceof Person); // true
console.log(nolbu instanceof Object); // true
console.log(nolbu instanceof Array); // false
console.log('');

const arr = [];
console.log(arr instanceof Person); // false
console.log(arr instanceof Object); // true
console.log(arr instanceof Array); // true
console.log('');

// console.log(nolbu.constructor); => Vue에서 타입 체크
console.log(nolbu.constructor === Person); // true
console.log(arr.constructor === Array); // true
console.log(arr.constructor === Object); // false
console.log('');

console.log('----------------- in -----------------');
console.log(nolbu);

// 객체에 지정한 속성이 존재하니?
console.log('name' in nolbu); // true
console.log('address' in nolbu); // false
console.log('toString' in nolbu); // true. 부모인 Object에 존재한다.
