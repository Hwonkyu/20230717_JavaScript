// 브라우저의 console 탭에 표시
console.log('브라우저의 검색 => 콘솔에 표시됩니다');

var name = 'NolBu';
var age = 20;

console.log(name);
console.log(age);
console.log('');            // 한 칸 띄우기

console.log('log');
// console.trace('trace');  // 지원 안함. Node 서버에서는 지원
console.info('info');
console.warn('warn');
console.error('error');
console.log('');

// 실행 경과 시간을 알아보고자 하는 경우 사용
console.time('이 텍스트가 end와 반드시 동일해야 한다');

for (var i = 0; i < 10000000; i++);

console.timeEnd('이 텍스트가 end와 반드시 동일해야 한다')
console.log('');

// 구조 확인
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

console.log(onAdd);     // 문자열 출력
console.dir(onAdd);     // 구조를 출력
console.log('');


// + 연산자는 문자열과 함께 사용하면 결과는 문자열(문자 이어쓰기가 된다)
var x = 10;
var y = 20;
console.log(x + y);       // 30

// JavaScript에서 문자(문자열)은 싱글(') 또는 더블(") 어느 것을 이용해서 묶어도 된다
console.log('문자열: ' + x);        // '문자열: 10'
console.log('문자열: ' + x + y);    // '문자열: 10' => '문자열: 10' + 20 => '문자열: 1020'
console.log(x + y + '문자열');      // 10 + 20 => 30 + '문자열' => '30문자열'
console.log('');

// 여러 변수를 한번에 각각의 값으로 출력.
console.log(name, age, x, y);     // console.log를 4번 기술한 것과 동일한 효과
console.log(name, age, x, y, age + x + y);
console.log('');


// 문자(문자열)은 싱글(') 또는 더블(") 어느 것을 이용할 수 있다. 
// 이때 "" 안쪽에서 싱글(')은 이스케이프 없이 바로 사용 가능
console.log("I'm a boy");
// console.log("I"m a boy");    // Error

// 반대도 마찬가지로 가능
console.log('I"m a boy');
console.log('');


// 세미콜론
// 자사스크립트는 세미콜론에 대한 제약이 없음 (알아서 붙여준다)
// 표현식으로 가능할때 까지 이서서 평가를 해 본다. 평가가 안되는 위치에 ;를 붙여줌

// var z;
// z = 10;
// console.log(z);
var z
z
  =
  10
console.log(z);
console.log('');

var a = 10
var b = x + y;
(x + y).toString()

