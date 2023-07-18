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
