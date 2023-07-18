// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode
console.log('----------------- [335] Object -----------------');
// import $ from 'jquery'    // webpack의 도움을 받아야 한다.

const nolbu = 'NolBu';
const kor = 100;
const eng = 80;
const total = kor + eng;
const avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

// 이 방법은 잘 사용하지 않는다.
// eslint-disable-next-line no-new-object
const hungbu = new Object();
// Object 객체는 "객체명.속성명" 형태로 내부 속성를 얼마든지 추가 가능
hungbu.name = '흥부';
hungbu.kor = 100;
hungbu.eng = 80;
// 속성 참조 역시  "객체명.속성명" 형태
hungbu.total = hungbu.kor + hungbu.eng;
hungbu.avg = hungbu.total / 2;

console.log(`${hungbu.name}님의 총점은 ${hungbu.total}이고 평균은 ${hungbu.avg}입니다.`);
console.log('');

// 가장 보편적으로 사용하는 방식이다
const bangja = {
  name: '방자',
  kor: 100,
  eng: 80,
  // 이러한 형태로 사용 불가. 오브젝트 객체 내부의 속성은 어느 항목이 먼저 만들어 지는지 알 수 없음
  // total: hungbu.kor + hungbu.eng,
  total: 0,
  // ES2015 부터 마지막 항목에 , 붙이는 것이 가능해 짐
  avg: 0,
};

// 속성 참조  "객체명.속성명" 형태
bangja.total = bangja.kor + bangja.eng;
bangja.avg = bangja.total / 2;
console.log(`${bangja.name}님의 총점은 ${bangja.total}이고 평균은 ${bangja.avg}입니다.`);
console.log('');

// *** 주의
// 객체의 key는 자바스크립트 변수 명명 규칙을 따른다. 그렇지 않은 경우는 "문자열" 형태로 묶어 사용 가능
// 또한 숫자는 ""없이 바로 가능

// 문자나 특수문자 $, _로 시작해야 한다
// 두번째 문자부터는 숫자를 포함할 수 있다
// 자바스크립트에서 사용하는 키워드(for, if...)는 변수로 사용 불가
// 대, 소문자를 구분한다

// 참조하는 경우 문자열과 숫자는 "객체명[문자열] 또는 객체명[숫자]" 형태로 참조한다
const hangDan = {
  name: '향단',
  'h-age': 20,
  kor: 100, // 문자열로 안 써도 문제 없음
  0: 80,
  1: 70,
  // 내부적으로 함수를 포함할 수 있다. 이를 별도로 메서드라 한다
  info: function () {
    console.log(`${hangDan.name} / ${hangDan['h-age']} / ${hangDan[0]}`);
  },
};
hangDan.info();

const key = 'h-age';
// console.log(hangDan.key);    hangDan.'h-age' (X) => hangDan['h-age'] (OK)

// 참조하는 프로퍼티가 변수명인 경우는 값이 어떤 값일지 모르므로 반드시 "객체명[변수명]" 형태로 사용한다
console.log(hangDan[key]);
