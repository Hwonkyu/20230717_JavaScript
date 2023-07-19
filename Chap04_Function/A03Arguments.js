/* eslint-disable prefer-rest-params */
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
  console.log(`Total: ${total}`);
}

onAdd();
onAdd(1);
onAdd(1, 2);
onAdd(1, 2, 3);
onAdd(1, 2, 'abc', 3);
console.log('');

// arguments는 매개변수 str이 있어도 항상 모든 매개변수를 관리한다
// rest는 순수 배열이다.
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
  console.log(`${str}: ${total}`);
}

onPlus();
onPlus(1);
onPlus(1, 2);
onPlus(1, 2, 3);
onPlus(1, 2, 'abc', 3);
console.log('');

// ES2015
// ...rest는 str에 1번째 매개변수가 대입되고 나머지 나는 매개변수만 관리한다
function onSum(...rest) {
  // console.log('str', str);
  // console.log('rest', ...rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    const item = rest[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`${total}`);
}

onSum();
onSum(1);
onSum(1, 2);
onSum(1, 2, 3);
onSum(1, 2, 'abc', 3);
console.log('');

function onSum1(str, ...rest) {
  // console.log('str', str); => 'Total: '
  // console.log('rest', ...rest); => value
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    const item = rest[i];

    if (typeof item === 'number') {
      total = total + item;
    } else if (typeof item === 'string') {
      // 처리할 로직
    }
  }
  console.log(`${str} ${total}`);
}

onSum1();
onSum1('Total: ', 1);
onSum1('Total: ', 1, 2);
onSum1('Total: ', 1, 2, 3);
onSum1('Total: ', 1, 2, 'abc', 3);
console.log('');
