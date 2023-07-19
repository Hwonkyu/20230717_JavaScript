console.log('---------------- [263] Arguments -----------------');

// 함수의 매개변수는 전달해도, 전달하지 않아도 된다.
// 다만 함수 내부에서 에러가 발생하지 않도록 정의하면 된다
function onAdd() {
  // arguments 는 전달되는 매개변수를 관리하는 유사배열(배열 비슷한) 객체이다
  // console.log(arguments, arguments.length);
  let total = 0;
  // total = total + arguments[0];
  // total = total + arguments[1];
  // total = total + arguments[2];
  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`onadd Total: ${total}`);
}

onAdd();
onAdd(1);
onAdd(1, 2);
onAdd(1, 2, 3);
onAdd(1, 2, 'abc', 3);
console.log('');

//arguments는 매개 변수 STR이 있어도 항상 모든 매개변수를 관리한다.
function onPlus(str) {

  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`onPlus Total: ${total}`);
}

onPlus();
onPlus(1);
onPlus(1, 2);
onPlus(1, 2, 3);
onPlus(1, 2, 'abc', 3);
console.log('');

// es 2015
// ... rest 는str에 1번째 매개 변수가 대입되고 나머지 나는 매개 변수만 관리한다.
function onSum(...rest) {

  // console.log('str', str);
  // console.log('rest', ...rest);
  // console.log(str, ...rest);

  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    const item = rest[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`onSum Total: ${total}`);
}

onSum();
onSum(1);
onSum(1, 2);
onSum(1, 2, 3);
onSum(1, 2, 'abc', 3);
console.log('');

function onSum_1(str, ...rest) {

  // console.log('str', str); -> total이라는 문자열
  // console.log('rest', ...rest); -> value
  // console.log(str, ...rest);

  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    const item = rest[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`${str}: ${total}`);
}

onSum_1();
onSum_1(1);
onSum_1(1, 2);
onSum_1(1, 2, 3);
onSum_1(1, 2, 'abc', 3);
console.log('');