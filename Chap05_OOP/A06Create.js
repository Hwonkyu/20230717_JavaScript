console.log('----------------- Object.create - 직접 상속 -----------------');
const one = {name: 'ONE'};
console.log(one);

const two = Object.create(null);
two.name = 'TWO';
console.log(two);

const three = Object.create(Object.prototype);
three.name = 'THREE';
console.log(three);

const four = Object.create(Array.prototype);
four.name = 'FOUR';
console.log(four);

const five = Object.create(null, {
  name: {value: 'FIVE'},
  age: {value: 20, writable: true},
});
console.log(five);
console.log(Object.getOwnPropertyDescriptors(five));
console.log('');

const myprop = {
  getName() {
    return this.name;
  },
  show() {
    console.log(`${this.name} / ${this.age}`);
  },
};
const six = Object.create(myprop, {
  name: {value: 'SIX'},
  age: {value: 20, writable: true},
});
console.log(six);
six.show();
