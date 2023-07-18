console.log('---------------- Object DeStructuring [ES2015] -----------------');
/*
    ES6 비 구조화 할당(DeStructuring)
    배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/
const obj = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
  getName: function () {
    return this.name;
  },
};

// const name = obj.name;
// const age = obj.age;

// 선언하는 변수명은 객체의 key와 동일한 이름이어야 한다.
const {name, age} = obj;
console.log(name, age);

// key의 변수값이 이미 사용되고 있다면 별칭 사용 가능
const {name: nickname, age: num, address} = obj;
console.log(nickname, num, address);

// 오브젝트 객체, 배열은 존재하지 않는 요소명, 요소 번호를 참조하면 에러가 아닌 undefined가 출력된다
console.log(obj.tel);

// 속성은 기본 값 할당 가능
const {name: x = 'unknown', age: y = 0, address: z, tel = '전번 없음'} = obj;
console.log(x, y, z, tel);
console.log('');

console.log('---------------- [636] Arrat DeStructuring -----------------');
// 별칭을 달 수 없음. 따라서 중복되지 않는 변수명을 적절히 구현해야 한다.
const arr = [10, 11, 100, 101, 1000, 1001];
console.log(arr[100]);

const [a, b, c, d, e, f, g] = arr;
console.log(a, b, c, d, e, f, g);

// 필요한 값만 추출. 필요 없으면 ,만 기술해서 skip
const [a1, , , d1, , f1] = arr;
console.log(a1, d1, f1);

const [, , , d2, e2, f2] = arr;
console.log(d2, e2, f2);
console.log('');

// ES2015
// ...rest => 나머지. 남는 요소값을 받아 배열로 관리한다
const [a3, b3, ...rest] = arr;
console.log(a3, b3, rest);
console.log('');

const [a4, [b4, c4]] = [10, [11, 12]];
console.log(a4, b4, c4);
console.log('');

// 값 뒤집기
let x1 = 10;
let y1 = 20;
[y1, x1] = [x1, y1];
console.log(x1, y1);
console.log('');

// JavaScript에서 가장 보편적으로 사용되는 자료 구조
const objArray = [
  {id: 1, name: 'NolBu', age: 35},
  {id: 2, name: 'BangJa', age: 18},
  {id: 3, name: 'HungBu', age: 25},
];
const [one, , three] = objArray;
console.log(one); // {id: 1, name: 'NolBu', age: 35},
console.log(one.id);

console.log(three.name);
