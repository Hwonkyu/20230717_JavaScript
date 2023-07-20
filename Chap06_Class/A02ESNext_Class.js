// ES2022
class Jumsu {
  #name; // private => 클래스 내부에서만 사용 가능한 변수 (인스턴스로 참조 불가)

  constructor(name, kor, eng) {
    this.#name = name;
    this._kor = kor;
    this._eng = eng;
  }

  onTotal() {
    return this._kor + this._eng;
  }
  onAvg(num) {
    return this.onTotal() / num;
  }
  display() {
    console.log(`${this.#name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg(2)}입니다`);
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    if (typeof name === 'string') this.#name = name;
  }
}

const nolbu = new Jumsu('NolBu', 100, 90);
console.log(nolbu);
nolbu.display();

// class 내부에서만 사용 가능한 변수.
// 따라서 이 값을 사용하게 하기 위해서는 작성자가 적절히 Getter / Setter를 구현할 필요가 있다
// console.log(nolbu.#name);
console.log(nolbu.name);

nolbu.name = 'ABC';
console.log(nolbu.name);
