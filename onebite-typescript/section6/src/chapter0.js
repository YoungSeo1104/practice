/*
* 클래스
-> 객체를 생성하기 위한 템플릿
-> 객체의 속성과 행동을 정의하는 청사진
-> 객체 지향 프로그래밍에서 중요한 개념
*/

let studentA = {
  name: '홍길동',
  age: 20,
  grade: 'A',
  study() {
    console.log('열심히 공부한다');
  },
  introduce() {
    console.log(`안녕하세요!`);
  },
};

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log('열심히 공부한다');
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍을 한다`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
//스튜던트 캐발자 인스턴스
const studentDeveloper = new StudentDeveloper('홍길동', 22, 'B', 'JavaScript');
console.log(studentDeveloper);
studentDeveloper.programing();

// 클래스를 이용해서 만든 객체 -> 인스턴스
//스튜던트 인스턴스
// let studentB = new Student('홍길동', 22, 'B');
// console.log(studentB);
// studentB.study();
// studentB.introduce();
