console.log('---------------- [682] OOP -----------------');
/*
  this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)이다.
  즉 this 바인딩은 호출 방식에 따라 동적으로 결정된다.
  일반 함수로서 호출 => 전역객체
  메서드로 호출 => 메서드를 호출한 객체 마침표 앞의 객체
  생성자 함수로 호출 => 생성자 함수가 생성할 인스턴스
*/
const person = {
  name: 'NolBu',
  kor: 100,
  eng: 80,

  onTotal() {
    return this.kor + this.eng;
  },
  onAvg() {
    return this.onTotal() / 2;
  },
  display: function () {
    // console.log(this);               // 객체 자체가 this
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  },
};
console.log(person);
person.display();
console.log('');

console.log('---------------- 생성자 함수 -----------------');
// ** 생성자 함수는 이 함수로 생성된 오브젝트 객체(인스턴스)의 부모 객체가 된다
function Jumsu(name, kor, eng) {
  // const this = {};
  // [[Prototype]] = Jumsu.constructor

  // this => 각 생성된 요소마다 개별적으로 사용할 값이나 메서스
  // static => 공통적(share) 형태로 사용할 값이나 메서드
  this.name = name;
  this.kor = kor;
  this.eng = eng;

  this.onTotal = function () {
    return this.kor + this.eng;
  };
  this.onAvg = function () {
    return this.onTotal() / 2;
  };
  this.display = function () {
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  };
  // return this;
}

// static 프로퍼티와 static 메서드
Jumsu.className = '3학년 5반';
Jumsu.area = function (w, h) {
  return w * h;
};

// new로 호출하면 내부 속성 constructor() 메서드가 호출되면서 생성자 함수로써 동작한다
console.dir(Jumsu);

const nolbu = new Jumsu('NolBu', 100, 90);
const hungbu = new Jumsu('HungBu', 100, 80);

console.log(nolbu);
console.log(hungbu);

nolbu.display();
hungbu.display();
console.log('');

// static
console.log(Jumsu.className);
console.log(Jumsu.area(10, 10));

/*
  function Object() {
    // this = {}
  };
  Object.getPrototypeOf(x, y) { };

  const obj = new Object();
  obj.hasOwnProperty();
  Object.getPrototypeOf()
*/
