console.log('----------------- Primary Type And Reference Type-----------------');

let numA = 100;
const numB = numA;

// 비교
console.log(numA == numB, numA === numB); // true, true

numA = 200;
console.log(numA == numB, numA === numB); // false, false
console.log('');

const objA = {
  name: 'NolBu',
  age: 30,
};

const objB = objA;
console.log(objA == objB, objA === objB); // true, true

objA.name = 'HungBu';
console.log(objA == objB, objA === objB); // true, true
console.log('');

const objC = {
  name: 'HungBu',
  age: 30,
};
console.log(objA == objC, objA === objC); // false, false
console.log('');
