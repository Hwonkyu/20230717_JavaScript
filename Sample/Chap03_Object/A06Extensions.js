console.log('----------------- [374] Object internal Method -----------------');

const one = { name: 'NolBu', age: 30 };

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능

// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
const two = { name: 'NolBu', age: 30 };

// 객체 동결. 읽기만 가능하다
const three = { name: 'NolBu', age: 30 };
