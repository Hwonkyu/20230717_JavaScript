console.log('---------------- [409] Array Like Object -----------------');
/*
유사 배열(Array Like Object)
  1. 0 이상의 정수 값으로 프로퍼티 이름을 갖는다.
  2. length 프로퍼티가 있다.
  3. 요소의 추가, 삭제에 따라 length의 값이 변경되어야 한다.

  HTML DOM의 li 등이 Array Like Object이다.
*/
const arr = [10, 20, 30];
console.log(Object.getOwnPropertyDescriptors(arr));

const arrLike = {
  0: 10,
  1: 11,
  2: 100,
  length: 3,

  push: function (item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  },
  pop() {
    const last = this[this.length - 1];

    delete this[this.length - 1];
    this.length--;

    return last;
  },
  shift() {
    return Array.prototype.shift.call(this);
  },
  unshift(x) {
    return Array.prototype.unshift.call(this, x);
  },
};
console.log(arrLike[0], arrLike[1], arrLike[2], arrLike[100]);
console.log('');

arrLike.push(20);
console.log(arrLike);

arrLike.pop();
console.log(arrLike);

arrLike.unshift(50);
console.log(arrLike);

arrLike.shift();
console.log(arrLike);
console.log('');

// Array.from() ES2015
// 유사배열, 이터레이터 객체를 순수 배열로 변환해 준다
console.log(Array.isArray(arrLike));

// 배열로 변환
const newArr = Array.from(arrLike);
console.log(newArr);
console.log(Array.isArray(newArr));

console.log(arrLike);
console.log(newArr);
