console.log('----------------- [298] 즉시 실행 함수 -----------------');
// Immediately Invoked Function Expression
/*
function outer() {
  var A = 10;
  let A1 = 20;

  function alert() {}
}
outer();

let A = 10;
let A1 = 20;
const alert = function () {};
console.log(globalThis);
*/

/*
  (function () {
    console.log('즉시 실행 함수 1');
  }()); // 안쪽에서 호출해도 된다.
*/

(function () {
  console.log('즉시 실행 함수 1');
})();

// Global 영역을 오염시키지 않는다.
const one = (function () {
  // eslint-disable-next-line no-var
  var A = 10;
  const A1 = 20;
  const funcName = '즉시 실행 함수 3';

  function alert() {
    window.alert(`${A} / ${A1}`);
  }

  const onAdd = function (x, y) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  };
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  };

  return {
    innerA: A,
    name: funcName,
    alert,
    onAdd,
    onMin,
  };
})();
// one = { innerA: A, name: funcName, alert, onAdd, onMin };
// console.log(one);
console.log(one.innerA, one.name);
// one.alert();
one.onAdd(10, 20);
one.onMin(20, 10);
// A1 변수값은 밖에서 참조 못하는 내부 변수가 된다 (Java 라면 private 속성)
console.log('');

// 추후에 기능을 추가되는 경우 편리하게 사용할 수 있다
const app = {};
(function () {
  // eslint-disable-next-line no-var
  var A = 10;
  const A1 = 20;
  const funcName = '즉시 실행 함수 3';

  function alert() {
    window.alert(`${A} / ${A1}`);
  }

  const onAdd = function (x, y) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  };
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  };

  Object.assign(app, {innerA: A, name: funcName, alert, onAdd, onMin});
})();

console.log(app.innerA, app.name);
// one.alert();
app.onAdd(10, 20);
app.onMin(20, 10);
// A1 변수값은 밖에서 참조 못하는 내부 변수가 된다 (Java 라면 private 속성)
console.log('');

// 즉시 실행 함수 종료 시작 앞에, 종료 뒤에 ;를 붙인다.
/*
  ; (function () {})();
  ; (function () {})();
*/
