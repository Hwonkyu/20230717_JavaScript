console.log('---------------- property shadowing -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

// 부모객체(Person)이 가지고 있는 display 메서드를 자신의 메모리 공간에 재 정의 (가까운 것부터 참조)
nolbu.display = function () {
  console.log(`Override: ${this.name} / ${this.age}`);
};
nolbu.display(); // Override ...
console.log(nolbu);

delete nolbu.display;
nolbu.display(); // 부모의 display
