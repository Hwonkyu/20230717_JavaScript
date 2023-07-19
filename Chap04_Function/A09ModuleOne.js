// export 키워드를 달면 다른 JS 파일에서 import 구문을 이용해 호출 해 사용 가능.
export const name = 'HungBu';
export const obj = {
  name: 'BangJa',
  age: 20,
  info: function () {
    console.log(`${this.name} / ${this.age}`);
  },
};

const arr = [10, 11, 100];
const today = new Date();
function onAdd(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
}

console.log(`A09 ModuleOne: ${name} / ${obj.name}`);

// 개별이 아닌 { } 형태로 묶어서 export도 가능
export {arr, today, onAdd as add};
