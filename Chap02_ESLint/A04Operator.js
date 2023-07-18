console.log('----------------- [147] Comparison Operator -----------------');

var x = 10;
var y = 3;

// >, <, <=, >=, == or ===(같다), !=, !==(같지 않다)
var result = x > y;
console.log('x > y => ' + result);

result = x >= y;
console.log('x > y => ' + result);
console.log('');

// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('');

// 일치 비교
// 비교에서는 숫자 우선 형 변환이다
var x = true;   // true => 1, false => 0
var y = 1;

result = x == y;      // true == 1 => 1 == 1 => true
console.log('true == 1 => ' + result);

x = true;
y = '1';
result = x == y;      // (true == '1') => (true == 1) => (1 == 1) => true
console.log('true == 1 => ' + result);
console.log('');

// 일치 연산자 ===
x = true;
y = 1;

// 먼저 두 타입을 비교한다. 타입이 틀리면 false
result = x === y;
console.log('true === 1 => ' + result);
console.log('')

x = "1";
y = 1;
console.log('"1" == 1 => ' + (x == y));
console.log('"1" === 1 => ' + (x === y));
console.log('');


console.log('----------------- 3항 연산자-----------------');
var name = 'NolBu';

if (name === 'NolBu') console.log('관리자');
else console.log('일반 유저');
console.log('')

result = (name === 'NolBu') ? '관리자' : '일반 유저';
console.log(result);
