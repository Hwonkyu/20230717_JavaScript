console.log('----------------- Primary Type And Reference Type-----------------');

let numA = 100;
let numB = numA;

// 비교
console.log(numA == numB, numA === numB);

numA = 200;
console.log(numA == numB, numA === numB);
console.log('');

const objA = {
  name: 'NolBu',
  age: 30,
};

const objB = objA;
