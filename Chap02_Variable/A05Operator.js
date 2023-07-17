console.log('----------------- [148] Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

// and => &&, or => ||, not => !
result = x > y && x > z;
console.log('(x > y) && (x > z) => ' + result);
console.log('');

// 연산자로 사용. 118 Page
// JavaScript에서는 값이 없으면 false다. 값이 아래와 같은면 모두 false와 동일하게 취급된다
// '', 0, -0, undefined, null, NaN, false
var age;
var result = (age === undefined) ? 'TRUE' : 'FALSE';
console.log(result);

// age 값이 위의 '', 0, -0, undefined, null, NaN, false 값이 아니니 (즉 값이 있니)
result = (!age) ? 'TRUE' : 'FALSE';
console.log(result);

// 이 브라우저가 addEventListener 객체가 있니? (기능을 지원 하니?)
// function addEventListener(name, callback) { }
result = (addEventListener) ? 'TRUE' : 'FALSE';
console.log(result);
console.log('');

console.log('----------------- &&, || 를 연산자로 사용 -----------------');
// 앞이 false면 (즉 값이 없으면) || 뒤 구문을 체크 (실행)한다
// 앞의 값이 없으면 뒤의 값을 result 변수에 대입
// 앞의 값이 있으면 뒤를 체크 할 필요 없다(true) 즉 앞의 age 값을 result 변수에 대입
// 값이 넘어오지 않는 경우 기본 값을 할당 할 목적으로 사용
result = age || 10;   // result = undefined || 10

function onAdd(x = 0, y) {
  y = y || 0;
  console.log(x + y)
}
onAdd();
console.log('');

// And는 앞이 true 이어야 뒤를 체크(실행) 한다
// 앞이 false면 뒤는 실행 안함. age 값이 없으면 age 값이 result에 대입.
// 값이 있으면 뒤의 값이 result에 대입
// age = 9;
result = age && ++x;
console.log(result);

// react에서 show / hide 구문으로 많이 사용된다.
// undefined가 화면에 출력된다
console.log(age && `<div>${age}를 이용해서 HTML 표시</div>`);


// ESNext
// Math.pow(2, 3) 와 동일
result = 2 ** 3;        // ES2016
console.log(result);    // 2 * 2 * 2;
console.log('')

// null 병합 연산자 => ??   // ES2020
// ??는 ||와 동일하다, 
// || => '', 0, -0, undefined, null, NaN, false 가 모두 false로 취급
// ?? => undefined, null 만 없는 값으로 취급된다
// age = 0;
result = age ?? ++x;
console.log(result);
