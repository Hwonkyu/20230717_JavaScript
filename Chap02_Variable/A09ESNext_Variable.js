console.log('----------------- [105] let, const [ES2015(ES6)] -----------------');

var nickname = 'NolBu';
var nickname = 'HungBu';

{
  var nickaname = 'BangJa';
}
console.log('nickname: ' + nickname);
console.log('');

// let
// 동적 타입은 var과 동일하다 즉 값에 의해 타입이 결정된다

// 1. 같은 이름으로 변수의 중복 선언이 안된다
let age = 20;
console.log('age: ' + age + ', typeof: ' + typeof age);

// let age = true;
// var age = true;
// const age = true;


// 2. 모든 { }에서 변수의 범위를 갖는다
let num = 100;
console.log('num: ' + num + ', typeof: ' + typeof num);
console.log('');

if (age > 10) {
  // 이 변수는  } 를 만나면 가비지 컬렉션(사용하지 않는 변수 삭제) 대상이 되서 메모리에서 삭제된다.
  let num = 'Hello World';
  console.log('IN num: ' + num + ', typeof: ' + typeof num);
}
console.log('OUT num: ' + num + ', typeof: ' + typeof num);
console.log('');

// 9번 정상 출력된다.
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}
console.log('');

// Error 호이스팅이 발생하지 않는다
// console.log(alert);

// 3 Global 영역을 오염시키지 않는다
// let, const로 선언된 변수는 TDZ(선언과 초기화 사이) 이라는 영역에 선언된다
let alert = 'Hello World';
console.log('alert: ' + alert + ', typeof: ' + typeof alert);

// TDZ과 window에 같은 이름으로 존재한다면 window 속성은 반드시 "window.속성명" 을 붙여 참조해야 한다
window.alert('NolBu');
console.log('');


console.log(globalThis);