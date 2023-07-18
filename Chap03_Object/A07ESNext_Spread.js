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
console.log(objA, objB);
console.log('');

// 기존 객체에 두 개를 복사
// 중복된 값이 있으면 뒤에 오는 속성 값으로 덮어쓰기가 된다.
const objD = Object.assign(objA, objB);
console.log(objD);
console.log(objA, objA === objD); // true
console.log('');

console.log('--------------- [627] spread Object [ES2015] ---------------');
objA = {
  name: 'NolBu',
  age: 30,
};

objB = {
  address: 'Seoul',
  age: 100,
};

// 집합(배열, 객체, 유사배열) 객체의 요소 값을 개별 값으로 취급해 준다
const objX = {...objA};
console.log(objX, objA);
console.log(objA === objX); // 주소값 틀림. 값 복사
console.log('');

// 같은 속성은 뒤에 오는 값으로 덮어쓰기가 된다
const objY = {...objA, ...objB};
console.log(objY);
console.log(objA, objB);
console.log('');

const objF = {
  name: 'NolBu',
  age: 30,
  info: {
    address: 'Seoul',
    tel: '010-1234-5678',
  },
};

const objG = {...objF};
console.log(objF === objG); // false
console.log(objF.info === objG.info); // true
console.log('');

// 하위 객체까지 새롭게 생성한다. deep가 깊을수록 처리가 복잡해진다
// immer라는 라이브러리는 이 처리를 쉽게 해 준다(react에서 사용)
const objH = {
  ...objF,
  info: {
    ...objF.info,
  },
};
console.log(objF === objH); // false
console.log(objF.info === objH.info); // false
console.log('');

console.log('--------------- spread Array ---------------');
const arrA = [10, 11, 100];
const arrB = [20, 21, 200];

const arrC = [...arrA];
console.log(arrA, arrC, arrA === arrC);
console.log('');

const arrD = [...arrA, ...arrB];
console.log(arrD);
console.log('');

const hello = 'Hello World';
console.log(...hello);

/**
 * Adds two numbers together.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @param {int} z The second number.
 * @return {int} The sum of the two numbers.
 */
function getTotal(x, y, z) {
  return x + y + z;
}
console.log(getTotal(...arrA));
