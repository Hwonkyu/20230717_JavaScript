console.log('---------------- [390] Array -----------------');
const arr = [10, 11, 100, 101, 1000, 11, 100];

// 배열의 요소를 지정한 문자로 이어서 문자열로 반환
const str = arr.join(' - ');
console.log(str, typeof str);

// indexOf, lastIndexOf  값의 위치 찾기
let result = arr.indexOf(11);
console.log(result); // 1

// 검색 시작 위치 지정
result = arr.indexOf(11, 3);
console.log(result); // 5

// 뒤에서 부터 찾는다. 카운트는 앞에서 부터 한다
result = arr.lastIndexOf(11);
console.log(result); // 5

// 없는 값이면 -1을 리턴한다
result = arr.lastIndexOf(1100);
console.log(result); // -1

// includes로 변경 사용 가능
if (arr.indexOf(1111) === -1) arr.push(1111);
console.log(arr);
console.log('');

// concat => push와 달리 배열의 맨 뒤에 지정한 값을 추가한 후 새로운 배열을 리턴
result = arr.concat(200);
console.log(result, arr);
console.log('');

console.log('---------------- Sort -----------------');

// sort는 배열 자체를 변경한다
arr.sort(); // unicode 비교. 비교 함수를 인수로 전달
console.log(arr);

arr.sort((x, y) => {
  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
});
console.log(arr);

/*
  const numCompare = (x, y) => {
    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
  };
  arr.sort(numCompare);
*/

// 정령을 뒤집는다
arr.reverse();
console.log(arr);
console.log('');

const objCompare = (key) => {
  return (x, y) => {
    if (x[key] > y[key]) return 1;
    else if (x[key] < y[key]) return -1;
    else return 0;
  };
};

const objArray = [
  {name: 'NolBu', age: 35},
  {name: 'BangJa', age: 18},
  {name: 'HungBu', age: 25},
];
objArray.sort(objCompare('name'));
console.log(objArray);
