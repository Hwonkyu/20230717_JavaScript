/* eslint-disable no-unused-vars */
console.log('---------------- Module  -----------------');
// 사용하기 전에 기술해도 되지만 보통 맨 위에 적는다
import {name, obj, arr, today, add} from './A09ModuleOne.js';

console.log(name, obj.name, arr[0], today.toLocaleString());
add(10, 20);
console.log('');

// default로 export 된 항목은 불러올때 중복되지 않은 임의의 이름으로 정의할 수 있다
// app = { x, y, onMin };
import two from './A09ModuleTwo.js';
// import {num, nickname} from './A09ModuleTwo.js';
import * as three from './A09ModuleTwo.js';

// import two, { num, nickname } from './A09ModuleTwo.js';
// import two, * as three from './A09ModuleTwo.js';

console.log(two.x, two.y);
two.onMin(10, 2);
// console.log(num, nickname);
console.log(three.num, three.nickname);
console.log('');
console.log('');

console.log('-------- 기존 방식 ----------');
(function () {
  const x = 10;
})();

// namespace
const app = {};
app.name = 'NolBu';
app.getName = function () {
  console.log(this.name);
};
app.getName();
console.log('');
