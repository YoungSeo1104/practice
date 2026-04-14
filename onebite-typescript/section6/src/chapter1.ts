/*
 * 타입스크립트의 클래스
 */

const employes = {
  name: '홍길동',
  age: 27,
  position: 'developer',
  work() {
    console.log('일하는 중');
  },
};

class Employes {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, postion: string) {
    this.name = name;
    this.age = age;
    this.position = postion;
  }

  // 매서드
  work() {
    console.log('일하는 중');
  }
}

class ExecutiveOfficer extends Employes {
  //필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeA = new Employes('하하', 29, '개발자');
console.log('employeA:', employeA);

const employeC = new ExecutiveOfficer('니나', 31, '개발자', 3);
console.log('employeC:', employeC);

const employeB: Employes = {
  name: '',
  age: 0,
  position: '',
  work() {},
};
