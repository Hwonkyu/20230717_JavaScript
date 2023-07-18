console.log('----------------- [374] Object internal Method -----------------');
// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
const one = {name: 'NolBu', age: 30};
console.log(Object.isExtensible(one)); // 확장 가능(속성 추가)하니 => true

// 없는 항목을 변경하고자 하면 수정이 아닌 추가가 된다
one.address = 'Seoul';
console.log(one);

Object.preventExtensions(one); // 추가 불가 속성으로 변경
one.tel = '010-7894-5612'; // 추가 X
delete one.address; // 삭제 OK
one.name = '놀부'; // 수정 OK
console.log(one);
console.log('');

// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
const two = {name: 'NolBu', age: 30};
console.log(Object.isSealed(two)); // 밀봉 상태니 => false

Object.seal(two); // 추가, 삭제가 금지됨

two.tel = '010-7894-5612'; // 추가 X
delete two.age; // 삭제 X
two.name = '놀부'; // 수정 OK

console.log(two);
console.log('');

// 객체 동결. 읽기만 가능하다
const three = {name: 'NolBu', age: 30};
console.log(Object.isFrozen(three)); // 동결 상태니 => false

Object.freeze(three); // 추가, 삭제, 수정이 금지됨

three.tel = '010-7894-5612'; // 추가 X
delete three.age; // 삭제 X
three.name = '놀부'; // 수정 X
console.log(three.name); // 참조 OK

console.log(three);
console.log('');
