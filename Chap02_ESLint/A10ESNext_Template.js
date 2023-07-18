console.log('---------------- [088] Template Literals -----------------');
// ES2015
let userName = 'NolBu';
let age = 30;
let address = 'Seoul';

const user = {
  name: '흥부',
  age: 20,
  address: 'Busan',
  info: function () {
    console.log(this.name + '님은 ' + this.address + '에 거주합니다');
    console.log(this.name + '   님의 나이는 ' + this.age + '입니다.\n'
      + this.name + '님은 ' + this.address + '에 거주합니다');
  },
  view: function () {
    console.log(`${this.name}님은 ${this.address}에 거주합니다`);
    console.log(`${this.name}님의  나이는    ${this.age}입니다.
${this.name}님은 ${this.address}에 거주합니다.`);
  }
}
console.log(userName + '님의 나이는 ' + age + '입니다.');
console.log(`${userName}님의 나이는 ${age}입니다.`);
console.log('');

user.info();
console.log('');

user.view();
console.log('');

// 연산자 사용이 가능하다
console.log(`${10 + 20}`);

// 값이 리턴되는 함수, 속성 값도 참조 가능
const arr = [10, 20];
console.log(`배열의 개수 ${arr.length}`);

// 3항 연산자
console.log(`${userName === 'NolBu' ? '관리자' : '일반 유저'}`);

// react, svelte => { }
// vue, angular => {{ }}
