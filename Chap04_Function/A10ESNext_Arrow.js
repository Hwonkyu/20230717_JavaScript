console.log('--------------------- [317] Arrow Function ---------------------');

// 매개변수의 기본값 지정 가능
// 선언문 방식은 Arrow 함수로 변경 안됨
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}
console.log(onAdd());
console.log(onAdd(10, 20));
console.log('');

// 이런 표현식(리터럴) 방식만 Arrow 함수로 변경 가능
const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
console.log(one(10, 20));

// {} 구문 안에 실행 구문이 1개만 있는 경우 { }과 return을 생략하고 한줄에 기술할 수 있다
// 한 줄에 기술하는 경우 => 뒤가 값이면 return을 붙여서 값을 리턴
// 명령문인 경우는 리턴하지 않고 실행.
const two = (x, y) => `${x} - ${y} = ${x - y}`;
const three = (x, y) => console.log(`${x} - ${y} = ${x - y}`);

console.log(two(20, 30));
three(30, 40);

// 매개변수가 1개인 경우는 ()를 생략할 수 있다. **3 => 2 * 2 * 2
// 매개변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.
const five = (x) => 2 ** x;
console.log(five(3));

// 매개변수에 초기화가 가능
const six = (x = 0, y = 0) => `${x} - ${y} = ${x - y}`;
console.log(six());
console.log(six(40, 50));

// 즉시 실행 함수로도 이용 가능
(() => {
  console.log('즉시 실행 함수');
})();
console.log('');
console.log('');

// 함수 내부에서 this를 사용하지 않은 경우 적극적으로 Arrow 함수를 이용하자
const onMulti = (x, y, callback) => {
  const result = x + y;
  callback(result);
};
onMulti(10, 20, (x) => {
  console.log(`Hello Function~~ ${x}`);
});
console.log('');

const onTwo = (x, y) => {
  console.log('----- START -----');
  setTimeout(() => {
    const result = x + y;
    console.log(result);
  }, 2000);

  console.log('----- END -----');
};
onTwo(1000, 2000);
console.log('');

const onFive = (ms) => {
  const promise = new Promise((resolve, reject) => {
    if (ms < 1000) reject(new Error('시간이 너무 짧습니다.'));
    setTimeout(() => {
      const result = 3000;
      resolve(result);
    }, ms);
  });

  return promise;
};
const getValue = async () => {
  try {
    const data1 = await onFive(2000);
    console.log(data1);
    const data2 = await onFive(data1 + 1000);
    console.log(data2);
    console.log(data2 + 2000);
  } catch (err) {
    console.error(err);
  }
};
getValue();

// 즉시 실행 함수는 this가 존재하지 않는다.
// Chap05_OOP의 A08, A09 참조
