console.log('---------------- Object [ES2015] -----------------');

const x = 10;
const str = 'Hello World';

const obj = {
  // key, value의 선언자 이름이 동일하면 변수명 생략 가능
  // x: x,
  // str: str,
  x,
  str,
};
console.log(obj);
console.log('');

// 계산된 프로퍼티 이름
for (let i = 1; i <= 3; i++) {
  obj['prefix' + i] = i * 10;
}
console.log(obj);
console.log('');

// ES6 Method
const nolbu = {
  name: 'NolBu',
  age: 20,
  // 오브젝트 객체 내부에 선언된 함수를 특별히 메서드라 한다
  display: function () {
    console.log(`${this.name} / ${this.age}`);
  },
  view() {
    // vue에서 자주 사용됨.
    console.log(`${this.name} / ${this.age}`);
  },
};
nolbu.display();
nolbu.view();
