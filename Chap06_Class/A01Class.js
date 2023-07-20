console.log('---------------- [697] Function -----------------');

const Jumsu = (function () {
  function Jumsu(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  Jumsu.prototype.onTotal = function () {
    return this.kor + this.eng;
  };
  Jumsu.prototype.onAvg = function () {
    return this.onTotal() / 2;
  };
  Jumsu.prototype.display = function () {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  };

  return Jumsu;
})();

const nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();
console.log(nolbu);
console.log('');

console.log('---------------- Class [ES5] -----------------');
class JumsuTwo {
  // 샘성자 함수를 new로 호출하면 실행되는 내부 속성 constructor이 정의되어 있음.
  // 전달되는 인수(this에 넣어줄 값)가 없다면 생략할 수 있다
  constructor(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;

    this.getName = function () {
      return this.name;
    };
  }

  // constructor 바깥에 정의하면 생성자 함수의 prototype에 정의된다
  // JumsuTwo.prototype.onTotal = function() { }  와 동일
  onTotal() {
    return this.kor + this.eng;
  }
  onAvg() {
    return (this.kor + this.eng) / 2;
  }
  onDisplay() {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  }

  // JumsuTwo.className = '3학년 1반';
  static className = '3학년 1반';
  static getArea(w, h) {
    return w * h;
  }
}

const hungbu = new JumsuTwo('NolBu', 100, 80);
const hangDan = new JumsuTwo('향단', 100, 90);
console.log(hungbu);
console.log(hangDan);
