console.log('---------------- [358] Getter / Setter -----------------');

const obj = {
  // 데이터 프로퍼티
  firstName: 'Hong',
  lastName: 'GilDone',
  age: 30,
  role: 'admin',

  // Java 같은 경우 이렇게 사용. age 프로퍼티를 숨기고 함수로 접근하게 한다.
  getAge: function () {
    // Guard를 사용해서 제약 조건을 달 수 있다는 이점이 있다
    if (this.role === 'Admin') {
      return this.age;
    } else {
      return '권한이 없습니다';
    }
  },
  setAge: function (x) {
    this.age = x;
  },

  // 자바스크립트 접근자 프로퍼티.
  // 정의는 함수 형태, 사용은 프로퍼티(속성) 형태로 한다.
  // 따라서 사용자는 함수인지 속성인지 구분이 가지 않는다
  get name() {
    if (this.role === 'admin') {
      return `${this.firstName} ${this.lastName}`;
    } else {
      return '권한이 없습니다';
    }
  },
  // Setter의 매개변수는 1개만 허용
  // 매개변수 name => { fName: '놀', lName: '부' };
  set name(name) {
    if (this.role === 'admin') {
      this.firstName = name.fName;
      this.lastName = name.lName;
    }
  },
};
console.dir(obj);
// console.log(obj.firstName);

// age
console.log(obj.getAge());
obj.setAge(100);
console.log(obj);

// Getter
console.log(obj.name);

// Setter
obj.name = {fName: '놀', lName: '부'};
console.log(obj.name);
console.log('');

console.log(obj);

// 부모 객체가 가지고 있는 값 확인
console.log(obj.__proto__); // ES6 표준이 됨(원래는 크롬 전용 명령)
console.log(Object.getPrototypeOf(obj)); // 표준
