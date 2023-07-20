console.log('---------------- 상속 -----------------');

class MyArray extends Array {
  average() {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this[i];
    }
    return total / this.length;
  }
}

const arr = new MyArray(1, 10, 11, 100, 101, 10, 11);
console.log(arr);

console.log(arr.average());
