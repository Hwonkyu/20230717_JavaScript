console.log('----------------- [362] defineProperty -----------------');

const obj = {
  name: 'NolBu',
  age: 30,
};

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// 속성을 추가할때 수정, 삭제, 열거를 지정해서 추가
Object.defineProperty(obj, 'address', {value: 'Seoul'}); // 나머지는 모두 false
Object.defineProperty(obj, 'tel', {
  value: '010-1234-5678',
  writable: true, // 수정 가능
  configurable: false, // 삭제 불가
  enumerable: false, // for ~ in 문에 노출 안됨
});
console.log(obj);
console.log('');

// 모든 요소를 한번에 출력
console.log(Object.getOwnPropertyDescriptors(obj));

delete obj.address; // configurable: false
delete obj.tel; // configurable: false
console.log(obj);
console.log('');

console.log('------- 수정 --------');
obj.name = 'Hello'; // writeable => true
obj.address = 'Busan'; // writeable => false (수정 안됨)
obj.tel = '02-123-5647'; // writeable => true
console.log(obj);
console.log('');

console.log('------- for ~ in --------');
// address, tel은 enumerable: false
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
console.log('');

// 오브젝트 객체를 생성할때 제약조건을 할당해서 생성
const user = {};
Object.defineProperties(user, {
  name: {value: '향단'},
  age: {value: 20, writable: true},
  address: {value: 'Seoul', writable: true, configurable: true},
  nickname: {
    enumerable: false,
    configurable: false,
    // value
    get() {
      return this.name;
    },
    // writable
    set(x) {
      // name은 writable이 false라 변경되지 않는다.
      this.name = x;
    },
  },
});
console.log(user);

// 수정
user.name = 'World';
user.age = 1;
user.address = 'Busan';
console.log(user);
console.log('');

// 삭제
delete user.name;
delete user.age;
delete user.address;
console.log(user);
console.log('');

// 열거
for (const key in user) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, user[key]);
  }
}
console.log('');

// Getter, Setter
console.log(user.nickname);
user.nickname = 'ABC'; // setter에 의해 변경되는 name이 writable이 false라 변경 안됨.
console.log(user);
