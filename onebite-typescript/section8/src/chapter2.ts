/*
 * keyof 연산자
//keyof 다음에는 꼭 타입(대문자)가 와야 한다!
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '이수비',
  age: 27,
};

getPropertyKey(person, 'name');


