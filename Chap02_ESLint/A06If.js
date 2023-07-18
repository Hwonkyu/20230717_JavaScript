console.log('----------------- [213] Conditional Statument -----------------');

// var 변수는 함수를 제외한 { } scope를 갖지 않는다.

console.log('');

let kor, eng, avg;
kor = 100;
eng = 90;
avg = (kor + eng) / 2;

// 단순 IF
/*
만약 avg >= 80 
  console.log('합격');

조건이 참일 때 실행할 명령이 1줄 이상이면 { }로 묶는다
1줄이면 { }로 생략할 수 있다
if (조건) {
  조건이 참이면 실행할 명령
  조건이 참이면 실행할 명령
  조건이 참이면 실행할 명령
}
조건이 거짓이면 이 위치로 이동해서 다음 구문이 실행된다 
따라서 if의 { } 구문은 실행되지 않음
*/

if (avg >= 80) {
  console.log('축하합니다.')
  console.log('합격');
}
console.log('평가 종료 1');
console.log('');

// IF ~ ELSE
// 조건이 참이면 if { } 블럭이 실행, 거짓이면 else { } 블럭이 실행되고 if 구문 전체를 벗어남
if (avg >= 80) {
  console.log('축하합니다.')
  console.log('합격');
} else {
  console.log('안따깝네요.')
  console.log('다음에 다시 도전해 주세요');
}
console.log('평가 종료 2');
console.log('');

// 다중 IF
// 하나의 조건을 만족하면 전체 IF 구문을 벗어난다
if (avg >= 90) {
  console.log('축하합니다.')
  console.log('A 학점');
} else if (avg >= 80) {
  console.log('축하합니다.')
  console.log('B 학점');
} else if (avg >= 70) {
  console.log('축하합니다.')
  console.log('C 학점');
} else if (avg >= 60) {
  console.log('축하합니다.')
  console.log('D 학점');
} else {                      // 생략 가능
  console.log('축하합니다.')
  console.log('F 학점');
}

console.log('평가 종료 3');
console.log('');


// switch
// 다중 IF 구문에서 조건이 === 인 경우 switch 구문으로 변경을 고려해 보자
const year = 2023;
const month = 5;
let day = 0;

switch (month) {
  case 1:           // month === 1
  case 3:
  case 5: case 7: case 8: case 10: case 12:
    day = 31;
    break;          // 여기서 벗어난다. 없으면 계속 아래 구문 실행
  case 2:           // month === 2
    day = 28;
    break;
  case 4: case 6: case 9: case 11:
    day = 30;
    break;
}
console.log(month + '월 입니다');
console.log('날짜는 ' + day + '까지 있습니다')
