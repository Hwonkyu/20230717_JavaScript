console.log('---------------- Primary Type And Reference Type-----------------');

let numA = 100;
const numB = numA;

// 비교. 변수 내부의 실질적인 값 비교
console.log(numA == numB, numA === numB);

numA = 200;
console.log(numA == numB, numA === numB);
console.log('');

// 비교. 변수 내부의 주소값 비교. 주소가 복사된다
const objA = {
  name: 'NolBu',
  age: 30,
};

const objB = objA;
console.log(objB == objB, objA === objB);

objA.name = 'HungBu';
console.log(objB == objB, objA === objB);
console.log('');

// 값이 같은 새로운 객체
const objC = {
  name: 'HungBu',
  age: 30,
};

console.log(objA === objC);
console.log('');

// 함수에 의한 값 변경
const num = 100;
const obj = {
  name: 'NolBu',
  age: 30,
};

const changeValue = function (x, y) {
  x = 200;
  y.name = '흥부';
};

console.log('----- 함수 호출 이전 -----');
console.log(num); // 100
console.log(obj); // { name: 'NolBu', age: 30 }

changeValue(num, obj);

console.log('----- 함수 호출 이후 -----');
console.log(num); // 100
console.log(obj); // { name: '흥부', age: 30 }
