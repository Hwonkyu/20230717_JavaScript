console.log('---------------- [429] Set [ES2015] -----------------');
// 중복 데이터를 허용하지 않는다. 따라서 순서가 없다 => for() 구문 이용이 안된다.
const mySet = new Set([10, 11, 100, 101, 1000, 11, 101]);

console.log(mySet);

// 크기 - 중복된 값은 1개로 취급한다.
console.log(mySet.size);

// 값을 가지고 있니. 값이 있으면 그 값을 사용. 아니면 기본 값 설정 후 사용
if (mySet.has(100)) {
  const num = 100;
  console.log(num);
} else {
  const num = 0;
  console.log(num);
}

// 추가
mySet.add(10); // 값이 있으므로 대입 안됨
mySet.add(20); // 값이 없으므로 대입된다.
console.log(mySet);

// 삭제
let result = mySet.delete(30);
console.log(result, mySet); // false

result = mySet.delete(20);
console.log(result, mySet); // true
console.log('');

// 순환
// index가 없으므로 값 자체가 index 역할을 한다. 또한 어떤 값이 먼저 참조될지 모른다(순서가 없음 ES5까지)
mySet.forEach((item, index, arr) => {
  // console.log(item, index, arr);
  if (item === 100) console.log(item);
});
console.log('');

// iterator 객체
const keys = mySet.keys();
console.log(keys);

// next() 를 이용해서 순차적으로 하나씩 호출 가능
console.log(keys.next());
const two = keys.next();
console.log(two.value, two.done);
