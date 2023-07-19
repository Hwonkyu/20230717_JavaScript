console.log('---------------- [687] prototype chain -----------------');

function Jumsu(name, kor, eng) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;

  this.getName = function () {
    return this.name;
  };
}

// 각 new에 의해 생성되는 오브젝트 객체의 부모는 객체를 생성한 생성자 함수다. 이 함수에는 prototype이라는 객체가 존재
Jumsu.prototype.onTotal = function () {
  return this.kor + this.eng;
};
Jumsu.prototype.onAvg = function () {
  return this.onTotal() / 2;
};
Jumsu.prototype.display = function () {
  console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
};

// Share 할 데이터.
Jumsu.clasName = '3학년 1반';

console.dir(Jumsu);

const nolbu = new Jumsu('NolBu', 100, 90);
const hungbu = new Jumsu('HungBu', 100, 80);

// VO => Value Object
// DAO => Jumsu 함수의 prototype
console.log(nolbu);
console.log(hungbu);

nolbu.display();
hungbu.display();
console.log('');

console.log('---------------- getPrototypeOf -----------------');
console.dir(Jumsu);

console.log(nolbu.__proto__);
console.log(Jumsu.prototype === nolbu.__proto__); // true
console.log(Jumsu.prototype.__proto__ === Object.prototype); // true
console.log('');

// 표준 방식
console.log(Object.getPrototypeOf(nolbu));
console.log(Object.getPrototypeOf(nolbu) === Jumsu.prototype);
console.log(Object.getPrototypeOf(Jumsu.prototype) === Object.prototype);
