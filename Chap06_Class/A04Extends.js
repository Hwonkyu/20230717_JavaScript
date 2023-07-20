console.log('---------------- 상속 -----------------');

class One {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}

// 부모와 동일한 변수를 사용한다면 constructor는 생략 가능
class OneSub extends One {}

const one = new OneSub(10, 20);
one.info();
console.log('');

// 매개변수의 수가 다르면 constructor를 생략할 수 없다
class Two {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}
// constructor의 인수가 다르면 반드시 constructor를 정의해야 한다.
// constructor 내부에서 가장 먼저 와야 할 명령은 super()이다
class TwoSub extends Two {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  // 부모의 메서드를 사용할 수 없으면 재 정의
  info() {
    console.log(`${this.x} / ${this.y} / ${this.z}`);
    super.info(); // 부모의 메서드를 호출한다
    // console.log(super.x); // 부모의 속성값 호출 안됨
  }
}
const two = new TwoSub(10, 20, 30);
two.info();
