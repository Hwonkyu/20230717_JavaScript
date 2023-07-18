console.log('---------------- [335] Object -----------------');

const obj = {
  name: 'NolBu',
  address: 'Seoul',
  info: function () {
    console.log(this.name + ' / ' + this.address);
  },
};

// 오브젝트 객체에 요소 추가
obj.age = 20;

// 메서드도 추가 가능
obj.view = function () {
  console.log(`${this.name} / ${this.age}`);
};

console.log(obj);
obj.info();
obj.view();

// 삭제. delete로 기본형 변수는 삭제 불가
delete obj.age;
delete obj.view;
console.log(obj);
console.log('');

// 수정
// 있는 프로퍼티(key)에 다른 값을 대입하면 변경
// 없는 프로퍼티(key)에 다른 값을 대입하면 추가
obj.name = '변경';
obj.age = 20;
console.log(obj);
console.log('');

// 열거. 순서가 없는 값을 집합이므로 for문으로 순환 안됨
// ES5

// Object(new Object()) 객체에 프로퍼티를 동적 추가
// eslint-disable-next-line no-extend-native
Object.prototype.toText = function () {};

for (const key in obj) {
  // console.log(key, typeof key);

  // obj 객체가 가지고 있는 요소니? toText는 출력 안됨
  // eslint-disable-next-line no-prototype-builtins
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}
