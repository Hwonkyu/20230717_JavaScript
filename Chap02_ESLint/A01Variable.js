console.log('---------------- [072] Variable -----------------');
// 변수는 식별자라고도 한다.
// var를 붙이지 않고 선언한 변수는 global(window) 영역에 정의된다.
A = 100;

const x = 10;
const y = 20;
let z = x + y;
console.log(z);

// 선언한 변수는 var 없이 참조
z = z + x;
console.log(z);
console.log('');

// JavaScript는 값에 의해 타입이 결정된다.
// 값에 의해 타입이 변경되는 동적타입 언어이다
let nickname = 'NolBu';
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = 100;
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = true;
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = [10, 20];
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);
console.log('');

console.log('---------------- [074] hosting (끌어올림) -----------------');
// var 변수는 Explorer를 지원하지 않는다면 사용하지 말자.

// 문제점
// 1. 자바스크립트는 문서를 실행하기 전에 먼저 문서 스캔을 해서 var 변수와 함수(선언문)를 먼저 메모리에 올린다
// 이후 첫 줄부터 실행하면서 변수의 선언과 함수의 선언은 스킵하고 초기화 작업만 하면서 순차적으로 실행
onAdd();
console.log('age: ' + age + ', typeof: ' + typeof age); // undefined, undefined

var age = 30;
console.log('age: ' + age + ', typeof: ' + typeof age); // 30, number

function onAdd() {
  console.log('나는 함수...');
}
console.log('');

// 2. 선언한 변수를 재 선언해도 에러 아님
var age = true;
console.log('age: ' + age + ', typeof: ' + typeof age); // true, boolean

// 위의 onAdd()를 호이스팅 과정에서 덮어쓴다
// function onAdd() {
//   console.log('나는 함수 Two...')
// }
console.log('');

// 3. 함수 이외의 { } 내부에서 범위(Scope)를 갖지 않는다
var num = 100;
console.log('num: ' + num + ', typeof: ' + typeof num);

if (num === 100) {
  var num = '문자열...'; // 위의 num 변수를 재 선언
  console.log('if inner num: ' + num + ', typeof: ' + typeof num);
}
console.log('num: ' + num + ', typeof: ' + typeof num);

for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}

// 4. Global 영역을 오염시킨다
const A1 = 'A1';

// 여기까지는 window.alert('....');
alert('Hello World');

// window.alert가 함수에서 변수로 변경됨
var alert = 100;

// 따라서 함수로써 실행할 수 없다
// alert('Hello World 02');       // Error

// console.log(window);    // Node에는 없음
// ES2020. Node, Browser 어느 환경에서도 global 요소에 대한 참조값을 출력해 준다
console.log(globalThis);
console.log('');
