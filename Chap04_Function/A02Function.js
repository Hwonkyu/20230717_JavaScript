console.log('---------------- [256] 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// var onAdd = undefined;
// onAdd(10, 20);
// console.log(onAdd); // 밑에 const onAdd를 var onAdd로 변경해야 에러 아님

// 함수 표현식은 선언하기 전에 먼저 호출하면 에러다..
const onAdd = function () {
  const result = 11 + 20;
  console.log(`11 + 20 = ${result}`);
};
onAdd.x = '함수입니다';
console.log(onAdd);
console.log(onAdd.x);

// 함수로써 실행
onAdd();
console.log('');

// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
const one = function () {
  const x = 10;
  const y = 20;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
};
one();
console.log('');

// 표현식 방식의 함수 선언(익명함수)
const factorial = function (x) {
  if (x !== 1) return x * factorial(x - 1); // 재귀호출
  else return 1;
};
console.log(factorial(10));
console.log(factorial); // 문자열 출력
console.dir(factorial); // 구조 출력
console.log('');

// 표현식 방식의 함수 선언(기명함수)
const fact = function factor(x) {
  // factor는 함수 내부에서 사용할 수 있는 변수명으로 등록된다
  if (x !== 1) return x * factor(x - 1); // 재귀호출
  else return 1;
};
console.log(fact(10));
console.log(fact); // 문자열 출력
console.dir(fact); // 구조 출력
console.log('');

// Function 생성자 함수 이용
// 마지막 매개변수 문자열('return x * y') 이외는 모두 매개변수다. 마지막 구문만 실행문이다
const func = new Function('x', 'y', 'return x * y');
console.log(func(2, 3));
console.log('')

// 호이스팅 차이점.
// 각각 함수가 대입되는 시점에 초기화 된다. 따라서 별도의 함수 값을 갖게된다.
var three = function () {
  const result = 10 + 20;
  console.log(result);
}
three();  // 30

var three = function () {
  const result = 20 + 30;
  console.log(result);
}
three(); // 50