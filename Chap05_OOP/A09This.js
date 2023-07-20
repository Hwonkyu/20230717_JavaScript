console.log('---------------- this -----------------');

// 객체 내부 메소드 내부의 함수. var로 선언한 변수라 window 영역에 생성된 count 변수가 된다
var count = 100;

const myObj = {
  count: 0,

  visit() {
    console.log(this); // 여기서 this는 myObj 자체가 된다.

    // 함수 내부의 함수의 this는 자바스크립트 처음 만들때 아예 정의를 해 놓지 않았음
    // 따라서 무조건 Global 영역을 this로 참조한다.
    function inner(x) {
      this.count = this.count + x;
      console.log(this.count); // 102
    }

    inner(2);
  },
};
myObj.visit();
console.log('');

console.log('--------------- 편법 that ---------------');
count = 100;

const yourObj = {
  count: 0,

  visit() {
    // console.log(this); // 여기서 this는 myObj 자체가 된다.
    const that = this; // yourObj가 this

    function inner(x) {
      // 변수의 scope chain에 의해 함수가 만들어질때 that의 값이 이미 결정(yourObj)된 상태다
      that.count = that.count + x;
      console.log(that.count); // 3

      function innerTwo() {
        that.count = that.count + 10;
        console.log(that.count); // 13
      }
      innerTwo();
    }

    inner(3);
  },
};
yourObj.visit();
console.log('');

console.log('--------------- [303] call, apply, bind ---------------');
count = 100;

const herObj = {
  count: 0,

  visit() {
    // this => herObj
    function inner(x) {
      this.count = this.count + x;
      console.log(this.count);
    }
    // 함수를 호출할때 동적으로 this 참조를 바꾸어서 호출하자
    // 지금의 this는 window => herObj로 변경해서 실행
    // 함수명.call(어떤객체를 this로 할 것인가, 인수, 인수,,)
    // 함수명.apply(어떤객체를 this로 할 것인가, [인수, 인수,,]) => 인수를 배열로 전달하는 것만 다르다
    inner.call(this, 3);
    inner.apply(herObj, [4]);

    // bind는 기존의 지정한 함수의 this를 지정한 객체로 변경한 새로운 함수를 리턴해 준다
    const newInner = inner.bind(herObj);
    newInner(5); // this가 herObj로 변경된 inner 함수다
  },
};
herObj.visit();
console.log('');

console.log('--------------- copy ---------------');
const person = {
  name: 'NolBu',
  display: function () {
    console.log(this.name);
  },
};

const emp = {name: 'HungBu'};
person.display(); // NolBu

emp.display = person.display;
emp.display(); // HungBu

const user = {name: '방자'};
person.display.call(user); // 방자

var name = 'Window';
person.display.call(this);
console.log('');

console.log('--------------- Arrow Function은 호출한 곳의 상위 {}가 this ---------------');
const obj = {
  name: '향단',
  age: 24,
  info() {
    console.log(`${this.name} / ${this.age}`);
  },
  // Arrow 함수에서는 this라는 참조가 존재하지 않는다.
  // Arrow 함수에서 this는 자신을 포함하고 있는 객체의 this를 가져와 사용한다
  // 아래는 this가 obj 객체다
  view: () => {
    console.log(`${this.name} / ${this.age}`);
  },
};

/* this. */ obj.info();
/* window. */ obj.view();
