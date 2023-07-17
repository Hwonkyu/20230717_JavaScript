console.log('----------------- [128] Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');

console.log('----------------- 단항 산술 연산자. ++, -- -----------------');
// 자신의 값에 1을 더한다 => ++
// 자신의 값에 1을 뺀다 => --
var z = 10;
// z = z + 1;
z++;      // z--;
console.log(z);

z = 10;
++z;      // --z;
console.log(z);
console.log('');

// 값이 대입되는 경우는 다르다
z = 10;

// 대입 구문에서 변수가 ++보다 앞에 있으면 선 대입, 후 증가
result = z++;   // result = z; z = z + 1
console.log(result, z);

// 선 증가, 후 대입
z = 10;
result = ++z;   // z = z + 1; result = z;
console.log(result, z);

x = 10;
y = 3;
result = x++ + ++y;
console.log(result, x, y);
console.log('');


console.log('----------------- 할당 연산자. +=, -=, *=, /=, %= -----------------');
// 변수 자신에게 1 이상의 값이 대입되는 경우
x = 10;

x += 2;   // x = x + 2;
x -= 2;   // x = x - 2;
x *= 2;   // x = x * 2;
x /= 2;   // x = x / 2;
x %= 2;   // x = x % 2;
console.log('');


// 소수점 연산은 주의
// 정수로 변경후 다시 소주점으로 변경
const one = 0.3 - 0.2;
const two = 0.2 - 0.1;
console.log(one === two);
console.log(one, two)


const three = (0.3 * 10) - (0.2 * 10);
const four = (0.2 * 10) - (0.1 * 10);
console.log(three === four);
console.log(three, four, (four / 10), (three / 10));
console.log('')

// ESNext
console.log(1_000_000_000);
console.log(0.123_456_789);
