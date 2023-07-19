// const myApp = { x, y, onMin };
const myApp = (function () {
  const x = 10;
  const y = 20;

  const onMin = function (x, y) {
    console.log(`${x} - ${y} = ${x - y}`);
  };

  return {x, y, onMin};
})();

// default는 이 파일에서 1개의 요소만 지정 가능 (두개 지정하면 에러)
export default myApp;

// 개별 export는 같이 사용 가능
export const num = 100;
export const nickname = 'TWO';
