console.log('----------------- [160] Casting -----------------');
// 명시적 형 변환(타입 캐스팅)
let x = 10;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

let str = String(x);
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

// JavaScript에서 변수에 값이 있으면 무조건 true이다. A05번 참조
let check = Boolean(x);
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

x = Number(str);
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

x = Number(check);    // true => 1, false => 0
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);
console.log('')

console.log('----------------- 암묵적 타입 변환 (강제 타입 변환) -----------------');
// 문자열과 +면 문자열(string)이 된다 String(x) 보다 빠르다
str = x + '';
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

str = '20';
x = +str;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

// + 이외의 연산도 숫자로 변경
x = str - 0;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

x = '10' * 1;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

str = '1234.5678';
x = +str;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);
console.log('');

// boolean
check = !!str;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

check = !!0;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

check = !!'';
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

check = !!NaN;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

check = !!undefined;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

check = !!null;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

// 브라우저로 실행해야 에러 아님ㄴ
check = !!globalThis.addEventListener;
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

// if (age) { }
// if (!age) { }

console.log('-----------------  global 함수 -----------------');
// https://hongjw1938.tistory.com/210