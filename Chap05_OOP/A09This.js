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

console.log('--------------- copy ---------------');
const person = {
  name: 'NolBu',
  display: function () {
    console.log(this.name);
  },
};

const emp = {name: 'HungBu'};

console.log('--------------- Arrow Function은 호출한 곳의 상위 {}가 this ---------------');
