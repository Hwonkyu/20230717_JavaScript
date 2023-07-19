/* eslint-disable no-redeclare */
/* eslint-disable no-var */
console.log('---------------- Scope -----------------');
// var로 선언된 변수는 함수 이외의 { } 스코프를 갖지 않는다.
var i = 10;
if (i > 0) {
  var i = 20;
  console.log('If block=> ', i);
}
console.log('Global=> ', i);

// for 순환을 위해 선언한 i 변수가 위 i 변수 값을 변경
for (var i = 0; i < 3; i++);
console.log('Global For=> ', i);
console.log('');

// 함수는 { } 스코프를 갖는다
var A = 'Global';

function out() {
  // 함수 내부에 선언된 변수는 var, let, const 상관없이 함수 내부에서만 유효한 변수가 된다(지역변수)
  var A = 'Local';
  console.log('Function IN: ', A);
}
console.log('Function OUT: ', A);

out();
console.log('Function OUT: ', A);
console.log(globalThis);
console.log('');

// 197 Page
// arguments 객체 생성
// scope chian 설정
// 내부 변수 정의
// this 값 결정
// 실행
let x = 'Global X';
let y = 'Global Y';

function outer() {
  let z = 'Outer Local z';
}

outer();
console.log('');

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

bar();
