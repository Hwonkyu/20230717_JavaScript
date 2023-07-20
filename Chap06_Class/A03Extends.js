console.log('---------------- [702] 상속 -----------------');

class Jumsu {
  // 생성자 메서드. 반환문을 갖지 않는다.
  constructor(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  onTotal() {
    return this.kor + this.eng;
  }
  onAvg() {
    return this.onTotal() / 2;
  }
  display() {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  }
}

// 단일 상속만 지원한다. 즉 부모 객체는 1개만 지정 가능하다
// JumsuThree는 Jumsu를 기반으로 태어난 자식 클래스가 된다
// 다만 #으로 정의한 private은 사용할 수 없음.
class JumsuThree extends Jumsu {
  constructor(name, kor, eng, math) {
    // Jumsu() => Jumsu의 constructor를 호출
    // 이 super 위에 다른 명령을 기술하면 에러 (항상 제일 먼저와야 한다)
    super(name, kor, eng); // => Jumsu의 constructor를 호출. 부모의 자료 구조를 먼저 만든다
    // this.name = name;
    // this.kor = kor;
    // this.eng = eng;
    this.math = math;
  }

  // 부모 클래스가 가지고 있는 메서드를 재 정의
  // Java의 메서드 오버라이드
  onTotal() {
    return this.kor + this.eng + this.math;
  }
  onAvg() {
    return this.onTotal() / 3;
  }
}

const nolbu = new JumsuThree('놀부', 100, 90, 80);
nolbu.display();

console.log(nolbu);
