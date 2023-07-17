console.log('----------------- [221] Loop Statument -----------------');

let result = 0;

// 동일한 명령이 반복 실행되는 경우..

// for
// 실행해야 할 개수를 아는 경우..
for (let i = 1; i <= 10; i++) {
  result = result + i;
}
console.log(result);

// 짝수의 합
result = 0
for (let i = 0; i <= 10; i = i + 2) {
  result = result + i;
}
console.log(result);

result = 0
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    result = result + i;
  }
}
console.log(result);
console.log('');

result = 0;
let k = 1;
for (; k <= 10;) {
  result = result + k;
  k++;
};

// while
// 실행해야 할 개수를 잘 모르는 경우
result = 0;
// for (let i = 0; i <= 10; i = i++)
let j = 0;
while (j <= 10) {
  result = result + j;
  j++;
}
console.log(result);

result = 0;
j = 0
while (true) {
  if (j === 11) break;
  result = result + j;
  j++;
}
console.log(result);
console.log('');

// do~while
// 먼저 실행을 해 봐야 조건을 알 수 있는 경우 사용
let kor = 0;
do {
  kor = prompt('국어 점수를 입력해 주세요', '기본값');
  console.log(kor, typeof kor);     // string
  console.log(kor + 100);           // "50" + 100 => '50100'
} while (kor < 0 || kor > 100)
