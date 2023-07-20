console.log('---------------- [400] Array 반복 메서드 -----------------');

// 순차적으로 값을 참조하는 경우 => 배열
// 순서 없이 값을 이름으로 참조 => 오브젝트ㄴ
const arr = [10, 11, 100, 101, 1000];

let total = 0;
for (let i = 0; i < arr.length; i++) {
  // 일반적인 for 구문
  total = total + arr[i];
}
console.log(total);

// [10, 11, 100, 101, 1000];
// for 구문의 1씩 증가와 비슷하다
/*
total = 0;
arr.forEach(function (item, index, arr) {
  // console.log(item, index, arr);
  total = total + item;
});
console.log(total);
*/

total = 0;
arr.forEach((item) => (total = total + item));
console.log(total);
console.log('');

// map [ES2015] => 배열 순환은 forEach와 동일. 단 구문내에 리턴되는 값으로 새로운 배열을 생성해 준다
// 리엑트에서 요소 수정에 사용
/*
let newArr = arr.map(function (item, index, arr) {
  if (item % 2 === 0) return item * 2;
  else return item;
});
console.log(newArr, arr);
*/
let newArr = arr.map((item) => (item % 2 === 0 ? item * 2 : item));
console.log(newArr, arr);

// filter [ES2015] => 배열 순환은 forEach와 동일. 단 구문내에 리턴되는 값이 true면 새로운 배열에 추가, falea면 추가 안함
// 리엑트에서 요소 삭제에 사용
/*
newArr = arr.filter(function (item, index, arr) {
  if (item % 2 === 0) return true; // item이 추가된다
  else return false;
})
console.log(newArr, arr);
*/
newArr = arr.filter((item) => (item % 2 === 0 ? true : false));
console.log(newArr, arr);
console.log('');

// 요소의 인텍스 또는 요소 자체를 반환
const objArray = [
  {id: 1, name: 'NolBu', age: 35},
  {id: 2, name: 'BangJa', age: 18},
  {id: 3, name: 'HungBu', age: 25},
];

// 요소값 자체를 반환
const findItem = (num) => {
  const result = objArray.find((item, index, arr) => {
    if (item.id === num) return item;
  });

  return result;
};
console.log(findItem(2));

// Index 참조
const findItemIndex = (num) => {
  const result = objArray.findIndex((item, index, arr) => {
    if (index === num) return item;
  });

  return result;
};
// 인텍스 2번의 요소를 참조
console.log(findItemIndex(2));

const names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa'];
