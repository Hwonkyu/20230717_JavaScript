console.log('---------------- Number -----------------');
let str = '123.56';
let num = Number(str);
// if(num === NaN) { }    // NaN는 비교하면 무조건 False다
num = 1; // Number(window.prompt('숫자를 입력해 주세요', ''));
if (isNaN(num)) num = 0;
const result = num + 1;
console.log(result);
console.log('');

num = 123.45678;
str = num.toFixed(2); // 소수점 2자리까지 표시 3자리에서 반올림
console.log(str, typeof str);
console.log('');

// 지수 표시법
num = 12345678.123456;
console.log(num.toExponential(2)); // 소수점 이하 표기를 2자리로
console.log(num.toPrecision(2)); // 전체 표시를 2개만
console.log('');

console.log('---------------- Math -----------------');
num = 10.000000000001; // 소수점 16자리까지 표현
console.log(Math.ceil(num)); // 11 무조건 올림

num = 10.99999999999;
console.log(Math.floor(num)); // 10 무조건 버림

num = Math.random(); // 0 ~ 0.9999999999999 까지 임의의 수를 추출해서 돌려준다
console.log(num);
console.log(num * 46);
console.log(Math.ceil(num * 46));
console.log(Math);
console.log('');

console.log('---------------- Date  -----------------');
const today = new Date(); // 현재 날짜, 시간
// const today = new Date('2024', '12', '25', '13', '25', '50'); // 날짜 지정
console.log(today.toLocaleDateString()); // 날짜만
console.log(today.toLocaleTimeString()); // 시간만
console.log(today.toLocaleString()); // 날짜 시간 모두

// 값을 따로 추출
const year = today.getFullYear();
const month = today.getMonth() + 1; // 1월이 0. 즉 0월부터 11월까지 존재
const date = today.getDate();
const day = today.getDay(); // 요일. 0이 일요일
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
const mills = today.getMilliseconds();
const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const view = `${year}-${month}-${date} ${yoil[day]} ${hour}:${min}:${sec} ${mills}`;
console.log(view);
console.log('');

// 1970-01-01 00:00:00 부터 지금까지의 경과 시간을 밀리초로 반환
const key = Date.now();
console.log(key);
console.log('');

// 날짜관련 자바스크립트 라이브러리 많음.
// moment, date-and-time

console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';

console.log(str.length); // 공백 포함

let len = str.trim(); // 좌우 공백 제거
console.log(len.length, str.length);

// ES2020
len = str.trimEnd(); // 마지막 공백만 제거
console.log(len);

len = str.trimStart();
console.log(len);
console.log('');

len = str.substring(1, 5); // 1부터 5까지 포함되는 문자열 추출
console.log(len);

len = str.indexOf('123'); // 1글자만 지정해도 된다. 문자열인 경우는 시작 위치
console.log(len);

console.log(str.includes('123')); // true

len = str.replace('123', '문자로 교환');
console.log(len, str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 구분자로 구분해서 배열로 리턴
len = str.split(' ');
console.log(len);
console.log('');

console.log('---------------- try ~ catch  -----------------');
// 예외가 발생할 수 있는 구문을 정상 처리 되도록 구현
// const z = x + y;
// console.log(z);

try {
  const z = x + y;
  console.log(z);
} catch (err) {
  // 에러에 다른 대처 처리를 기술할 수도 있음
  console.info('위 try에서 에러가 발생하면 이 catch의 {} 구문이 실행되고 try ~ catch 구문을 빠져 나감');
}

// 강제적으로 정상 처리가 안되도록 처리 throw 구문과 함께 사용
let bank = 10000;
function decMoney(num) {
  // throw new Error('잔금이 부족합니다'); 강제 에러 발생
  if (bank - num < 0) throw new Error('잔금이 부족합니다');

  bank = bank - num;
  console.log(`잔금은 ${bank}입니다`);

  return bank;
}

try {
  console.log(decMoney(15000));
} catch (err) {
  console.log(err);
  console.error(err.message);
}

console.log(`잔금은 ${bank}입니다.`);

console.log('---------------- 프로그램 종료  -----------------');
