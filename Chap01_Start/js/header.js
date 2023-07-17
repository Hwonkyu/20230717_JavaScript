// header.js

// 한 줄 주석
// head에 기술하는 자바스크립트는 보통 변수 정의, 함수 정의 등 이 문서에서 공통적으로 사용할 값 정의
// Event 정의 등...
var name = '놀부';
var age = 20;
function onAdd(x, y) {
  document.write(`${x} + ${y} = ${x + y}`);
}

// 시작하자 마자 실행해야 할 명령 구문
// 문서가 /html까지 정상적으로 모두 읽은 후에 실행되는 이벤트..
window.addEventListener('load', function () {
  document.getElementById('result').innerHTML = '<b>Head에서 추가한 문자열</b>';
});

document.write('Head에 정의한 명령문...');
