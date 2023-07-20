// ES6
const arr = [10, 11, 100, 101, 1000, 1001];

// 요소의 초기화 fill. 원래 배열이 변경된다.
const one = arr.fill('A', 1, 3);
console.log(one, arr);

const two = new Array(10); // 10개짜리 빈 배열 생성
two.fill(0, 0);
console.log(two);
console.log('');

// indexOf => includes
let result = arr.includes('A'); // true
console.log(result);

if (!arr.includes(1111)) arr.push(1111);
console.log(arr);

// isArray [ES5]. instanceof, constuctor 대신 사용 가능
console.log(Array.isArray(arr));
console.log('');

// Array.of [ES5]
// new Array(5); // 5개짜리 배열. 따라서 이 구문으로 1개짜리 요소가 있는 배열을 만들 수 없음
result = Array.of(5); // [5]
console.log(result);

result = Array.of(); // []
console.log(result);

result = Array.of(1, 2, 3); // [1, 2, 3];
console.log(result);
console.log('');

// Array.from() [ES2015] => A03ArrayLike 참조
