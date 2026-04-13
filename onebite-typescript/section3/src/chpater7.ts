/*
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

//value => number : toFixed() 메서드 사용
//value => string : toUpperCase() 메서드 사용
//value => Date : getTime() 메서드 사용
//value => Person : name과 age 속성 사용
function func(value: number | string | Date | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed(1));
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}, ${value.age}`);
  }
}

console.log(func(10.7)); // 10.7
console.log(func('hello')); // HELLO
