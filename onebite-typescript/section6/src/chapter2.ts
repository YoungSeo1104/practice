/*
* 접근 제어자 (access modifier)
-> public, protected, protected
public : 모든 범위에서 접근 가능
private : 클래스 내부에서만 접근 가능
proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
*/

class Employes {
  //필드
  private name: string;
  protected age: number;
  position: string; // 자동으로 public

  //생성자
  constructor(name: string, age: number, postion: string) {
    this.name = name;
    this.age = age;
    this.position = postion;
  }

  // 매서드
  work() {
    console.log('');
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

  //메서드
  func() {
    this.age;
  }
}

const employee = new Employes('홍길동', 27, 'developer');
// employee.name = '김철수'
// employee.age = 30;
employee.position = '디자이너';
