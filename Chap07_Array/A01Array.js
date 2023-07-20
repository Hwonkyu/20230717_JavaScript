/* eslint-disable no-array-constructor */
console.log('---------------- [122, 390] Array -----------------');
// 선언
const one = new Array(10, 11, 100, 101, 1000); // 요소가 5개인 배열이 생성된다

// 요소가 5개인 배열을 생성. 값은 모두 undefined이다.
// 선언시 정의한 방의 개수는 의미 없음. 이상 추가하면 계속 추가된다.
const two = new Array(5);
const three = [10, 11, 100, 101, 1000]; // 요소가 5개인 배열이 생성된다
const four = []; // 빈 배열 생성. 요소수는 0개

console.log(one);
console.log(two);
console.log(three);
console.log(four);

// 배열의 값 추가(수정) 2**32 42억개 (4,294,967,295)
// 값은 어떤 값이든 들어 갈 수 있다
two[0] = 20;
two[1] = 21;
two[2] = function () {
  return 10;
};
two[10] = 2000;
console.log(two);

// 배열에 방(요소)가 몇개 있니?
console.log(two.length); // length는 마지막 방번호 + 1과 동일한 값

// 배열 요소 참조. 객체는 없는 요소를 참조하면 undefined가 출력(에러 아님)
console.log(two[0], two[1], two[1000]);
console.log(two[2]());
console.log('');

// 함수 조작 메서드

// 아래 5개는 리엑트에서는 기본적으로는 사용 안함(immer에서는 사용). Vue는 이 메서드를 이용
// 배열 맨 뒤에 값 추가 (원래 배열에 추가 - 주소값 변경은 없다)
let result = one.push(1001);
console.log(result, one); // result는 추가된 후 length 값

// 배열 맨 앞에 값 추가 (원래 배열에 추가 - 주소값 변경은 없다)
result = one.unshift(1);
console.log(result, one); // result는 추가된 후 length 값

// 배열 맨 뒤에 값 삭제 (원래 배열에 추가 - 주소값 변경은 없다)
result = one.pop();
console.log(result, one); // result는 삭제된 값

// 배열 맨 앞에 값 삭제 (원래 배열에 추가 - 주소값 변경은 없다)
result = one.shift();
console.log(result, one); // result는 삭제된 값
console.log('');

// splice => 중간 요소의 추가, 삭제, 변경
// 변수명.splice(시작위치, 개수) => 시작위치에서 개수만큼 삭제
// 변수명.splice(시작위치, 개수, 값1, 값2..) => 시작위치에서 개수만큼 값1, 값2로 변경
result = one.splice(1, 0, 21, 22, 23);
console.log(result, one);

// 1번째의 요소 2개를 31로 변경
result = one.splice(1, 2, 31);
console.log(result, one);

// 1번째의 요소 1개를 삭제. 치환 값이 없으면 삭제
result = one.splice(1, 1);
console.log(result, one);
