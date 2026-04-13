/**
 * 기본 타입간의 호환성
 */

let num1: number = 1;
let num2: 10 = 10;

num1 = num2; //업캐스팅

/*
* 객체 타입 간의 호환성
-> 어떤 객체 타입이 다른 객체 타입에 할당될 수 있는지에 대한 규칙
-> 구조적 타이핑(Structural Typing) 시스템을 기반으로 함
-> 객체 타입 간의 호환성은 객체의 속성과 메서드가 일치하는지 여부에 따라 결정됨 
*/

//구조적 타입 시스템
type Animal = {
  //슈퍼 타입
  name: string;
  age: number;
};

type Dog = {
  // 서브 타입
  name: string;
  age: number;
  breed: string; // 추가 속성(프로퍼티)
};

let animal: Animal = {
  name: 'Buddy',
  age: 5,
};

let dog: Dog = {
  name: 'Max',
  age: 3,
  breed: 'Labrador',
};

animal = dog; //업캐스팅
// dog = animal; //다운캐스팅 (오류)

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: 'TypeScript Guide',
  price: 29.99,
  skill: 'TypeScript',
};

book = programmingBook; //업캐스팅
// programmingBook = book; //다운캐스팅 (오류)

/*
 * 초과 프로퍼티 검사(Excess Property Checks)
 */
let book2: Book = {
  name: 'TypeScript Guide',
  price: 29.99,
  // skill: "TypeScript" // 오류: 'skill'은 'Book' 타입에 존재하지 않는 프로퍼티입니다.
};

let book3: Book = programmingBook; //업캐스팅은 허용됨

function func(book: Book) {
  func({
    name: 'TypeScript Guide',
    price: 29.99,
    // skill: "TypeScript"
  });

  func(programmingBook); //업캐스팅은 허용됨
}
