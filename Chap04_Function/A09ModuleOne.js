const name = 'HungBu';
const obj = {
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
