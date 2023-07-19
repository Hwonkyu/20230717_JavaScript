console.log('---------------- function -----------------');

function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}
// console.dir(onAdd);
// 일반 함수로 호출
console.log(onAdd(10, 20)); // OK

// 반환값이 객체가 아닌 기본형인 경우는 new로 호출하면 항상 빈 객체가 리턴된다.
const one = new onAdd(10, 20);
console.log(one); // {}
console.log('');

function onMin(x, y) {
  return {result: x - y};
}
console.log(onMin(10, 20)); // OK

// 일반 함수가 객체를 리턴하는 경우 new로 호출하면 리턴되는 객체 자체를 반환해 준다
const two = new onMin(10, 20);
console.log(two); // {result: -10}
console.log('');

console.log('---------------- constructor -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const nolbu = new Person('NolBu', 30);
const hungbu = Person('HungBu', 20);
console.log(nolbu);
console.log(hungbu); // undefined
// hungbu.info();     // undefined.info()
console.log('');

console.log('---------- 에러가 발생하지 않도록 수정 ------------');
// new.target => ES2015
// new로 호출되면 생성자 함수가 참조, 일반 함수로 호출되면 undefined
function Employee(name, age) {
  // console.log(new.target);
  if (!new.target) return new Employee(name, age);

  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const bangJa = Employee('BangJa', 18);
console.log(bangJa.info());

// scope safe constructor. 스코프 세이프 생성자 패턴
function Student(name, age) {
  // this는 내부에서 만들어지는 instance에 반환될 객체
  // 이 객체가 어떤 생성자 함수에 의해 만들어졌니? (상속까지 체크한다)
  // console.log(this instanceof Student);  // false
  if (!(this instanceof Student)) return new Student(name, age);

  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const hangdan = Student('hangdan', 18);
console.log(hangdan.info());
