/*
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; // 인터페이스가 합쳐질 때, name 프로퍼티는 string과 number 타입이 모두 될 수 없으므로 오류 발생
  name: string;
  age: number;
}

interface Developer extends Person {
  name: '';
}

const person: Person = {
  name: '홍길동',
  age: 30,
};

/*
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
