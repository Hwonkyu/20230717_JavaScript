console.log('----------------- [079] Type -----------------');
// JavaScript 기본형 변수
const name = 'NolBu';
const age = 10;
const check = true;
// let unValue;             // 아래와 동일
let unValue = undefined;
let nullValue = null;
const key = Symbol();

// 리퍼런스 (참조형)
const arr = [10, 11];
const user = { name: 'A', age: 10 };


console.log('name: ' + name + ', typeof: ' + typeof name);
console.log('age: ' + age + ', typeof: ' + typeof age);
console.log('check: ' + check + ', typeof: ' + typeof check);
console.log('unValue: ' + unValue + ', typeof: ' + typeof unValue);
console.log('nullValue: ' + nullValue + ', typeof: ' + typeof nullValue);
console.log(key, typeof key);
console.log('');

console.log('arr: ' + arr + ', typeof: ' + typeof arr);
console.log('user: ' + user + ', typeof: ' + typeof user);
console.log('');

// 이스케이프 문자
// \n => 개행
// \t => tab
// \' => '을 문자열로 취급
// \" => "을 문자열로 취급
// \\ => \을 문자열로 취급
console.log('Hello World\nGood Morning');
console.log('Hello World\t\t\tGood Morning');
console.log('I\'am a boy');
console.log('');

console.log('\uAC00');          // 가
console.log('\u{1F600}');       // 웃는 이모티콘
