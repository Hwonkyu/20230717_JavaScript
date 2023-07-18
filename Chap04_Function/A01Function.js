/* eslint-disable no-var */
console.log('---------------- [256] 함수 선언문 -----------------');
// 함수는 동일한 로직을 하나로 묶을 목적으로 사용한다.
// const result = 10 + 20;
// console.log(`10 + 20 = ${result}`);

/*
function 함수명([매개변수, ...]) {
  함수명이 호출되면 실행될 로직을 구현...
}
*/

// 자바스크립트에서는 함수도 하나의 값 (함수 객체)이다
// onAdd가 변수명이다
function onAdd() {
  const result = 11 + 20;
  console.log(`11 + 20 = ${result}`);
  // 함수를 호출한 곳으로 이동
}

onAdd.x = '함수입니다';
console.log(onAdd);
console.log(onAdd.x);

// 함수로써 실행
onAdd();
console.log('');

// 호이스팅
// 변수는 메모리에 로드되면서 undefined로 초기화 된다
// 함수는 메모리에 로드되면서 완벽히 구현된 상태로 정의된다. (이름이 윈도우 영역을 오염시킨다)
console.log(A); // undefined
onMin(); // onMin 함수
console.log('');

var A = 10;
function onMin() {
  console.log('onMin 함수');
}
console.log(globalThis);

// 선언문 방식의 함수 선언
// 일반 함수
function one() {
  const x = 10;
  const y = 20;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
one();

// 매개변수가 있는 함수. 호출하는 곳에서 사용할 값을 전달한다.
// 단 자바스크립트에서는 전달하는 값을 안 전달해도, 많이 전달해도 에러가 아니다
// 만드는 사람이 함수 내부에서 전달하는 값에 상관없이 에러가 밣생하지 않도록 정의 할 필요가 있다
function two(x, y) {
  // 내부에 var, let, const 선언과 상관없이 함수 내부에서만 유효한 지역 변수가 된다.(***)
  // 매개변수로 받은 x, y는 함수 내부에 선언된 지역변수가 된다. 함수도 { } 형태이다
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
two(20, 30); // 인수
two(1, 2); // 인수
console.log('');

// ES2015에서 매개변수에 기본값을 할당 할 수 있다
function three(x, y = 0) {
  x = x || 0;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
three(20, 30);
three();
three(20, 30, 40, 50); // 남는 값은 무시된다
console.log('');

// 반환값이 있는 함수.
// 중간 처리까지만 함수에 실행. 처리한 결과값을 호출한 곳에 전달해서 로직을 이어갈 목적
function four(x = 0, y = 0) {
  const result = x + y;

  // 반환
  return result; // 이 값이 호출된 곳에 함수 값으로 치환된다
}
four(20, 30); // const four = 50;
console.log(four(20, 30) / 2);
console.log(four(20, 30) * 2);

const value = four(20, 30); // const value = 50
console.log(value / 2);
console.log(value * 2);
console.log('');

// 반환값이 없는 함수. => undefined 확인.
// 리턴이 없은 함수는 묵시적으로 undefined를 리턴해 준다
function five(x = 0, y = 0) {
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
const fiveReturn = five(1, 2);
console.log(fiveReturn); // undefined
console.log('');

// 위의 호이스팅 주의점
function six() {
  const result = 10 + 20;
  console.log(`10 + 20 = ${result}`);
}
// 호이스팅 과정에서 밑에 있는 함수가 이미 정의된 함수를 덮어쓴다
six();

function six() {
  const result = 20 + 30;
  console.log(`20 + 30 = ${result}`);
}
six();
