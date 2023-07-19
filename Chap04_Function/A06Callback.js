/* eslint-disable no-unused-vars */
console.log('---------------- [307] 중첩함수, 콜백함수 -----------------');

// 중첩함수
function outer() {
  const x = 10;

  // 중첩 함수
  function inner(y) {
    const result = x + y;
    console.log(`Inner ${y} / ${result}`);
  }

  inner(20);
}
outer();
// console.log(x);    // 함수 내부에 선언된 지역 변수. 함수 외부에서 참조 불가
// inner(20);         // 함수 내부에 선언된 함수. 함수 외부에서 참조 불가
console.log('');

/*
함수는 일급객체
  1. 리터럴에 의해 생성 가능                    const func = function() { }
  2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능    const arr = [10, function() { }, ]
  3. 함수의 인자나 리턴 값으로 사용 가능           callback, HOF
  4. 동적으로 프로퍼티 생성 가능                 const func = function() { }; func.x = 100;
*/

// Higher Order Function
const outer2 = function (x) {
  console.log('outer 함수 호출', x);

  const inner2 = function (y) {
    console.log(`Inner : ${x + y}`);
  };

  // inner2(20);
  return inner2;
};
const inner2 = outer2(10);
console.log(inner2);
inner2(20);
console.log('');

console.log('----------- 함수의 인자나 리턴 값이 될 수 있다. -------------');
const onAdd = function (x, y, callback) {
  const result = x + y;

  // 처리 후 나중에 실행 할 구문을 묶어서 전달해 준다
  callback(result);
};

// 시간 걸리는 작업에서 이러한 콜백 함수를 사용한다.
onAdd(10, 20, function (x) {
  console.log(`Hello Function~~ ${x}`);
});

// 시간 걸리는 작업이라면
const sleep = function (ms) {
  // Date.now => 1970-01-01 00:00:00 기준으로 현재 시간까지를 밀리초(1000이 1초)로 환산한 값
  const timeout = Date.now() + ms;
  console.log(timeout);
  while (Date.now() < timeout);
};

const one = function (x, y) {
  console.log('----- START -----');
  sleep(2000);
  const result = x + y;
  console.log(result);
  console.log('----- END -----');
};
// one();

const two = function (x, y) {
  console.log('----- START -----');

  // 지연함수. 지정한 시간이 경과되면 전달된 callback 함수를 1번 실행하고 종료된다
  setTimeout(function () {
    const result = x + y;
    console.log(result);
  }, 2000);

  console.log('----- END -----');
};
// two(1000, 2000);

const three = function (x, y) {
  console.log('----- START -----');

  // setTimeout => 지연함수. 지정한 시간이 경과되면 전달된 callback 함수를 1번 실행하고 종료된다
  setTimeout(function () {
    const result = x + y;
    console.log(`1차 출력 ${result}`);
    // return result;         // setTimeout 함수가 리턴값을 받는다 - 아무런 의미 없음

    // 함수의 중복이 반복되는 구조를 콜백지옥이라 한다.
    setTimeout(function () {
      const value = result + 5000;
      console.log(`2차 출력 ${result} / ${value}`);
    }, 3000);
  }, 2000);

  console.log('----- END -----');
};
three(1000, 2000);

console.log('---------------- [604] Promise -----------------');

console.log('---------------- 프로그램 종료 -----------------');
