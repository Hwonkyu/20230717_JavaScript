console.log('--------------- Object assign ---------------');
let objA = {
  name: 'NolBu',
  age: 30,
};

let objB = {
  address: 'Seoul',
  age: 100,
};

// Object.assign => 기존 객체가 변경된다
// Spread Operator [ES2015] => 기존 객체는 변경되지 않는다.
const objC = Object.assign({}, objA);
console.log(objC, objA === objC);
objC.name = 'Hello';
console.log(objC, objA);
console.log('');

const objE = Object.assign({}, objA, objB);
console.log(objE);
console.log(objA, objB)
console.log('');

// 기존 객체에 두 개를 복사
// 중복된 값이 있으면 뒤에 오는 속성 값으로 덮어쓰기가 된다.
const objD = Object.assign(objA, objB);
console.log(objD);
console.log(objA, objA === objD); // true
console.log('');

console.log('--------------- [627] spread Object ---------------');
objA = {
  name: 'NolBu',
  age: 30,
};

objB = {
  address: 'Seoul',
  age: 100,
};

const objF = {
  name: 'NolBu',
  age: 30,
  info: {
    address: 'Seoul',
    tel: '010-1234-5678',
  },
};

console.log('--------------- spread Array ---------------');
const arrA = [10, 11, 100];
const arrB = [20, 21, 200];
