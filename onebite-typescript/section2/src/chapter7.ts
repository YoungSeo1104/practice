// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입
// 반환하는 값이 아무것도 없을때에 void 타입을 사용한다.

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

function func3(): null {
  console.log('hello');
  return null; // 리턴값을 넣고 싶지 않을때에 void를 사용!
}

function func8(): undefined {
    // no return; // undefined 타입은 아무것도 반환하지 않을 때에 사용한다.
}

let a: void;
// a = 1; // void 타입은 오직 undefined와 null만 할당할 수 있다. (strictNullChecks 옵션이 켜져있을 때)
// a = 'hello';// a = true; // boolean 타입도 할당할 수 없다.
// a = {}; // object 타입도 할당할 수 없다.
a = undefined;

// never -> 절대 발생하지 않는 타입
// 함수에서 절대 반환하지 않는 타입을 나타낼 때 사용한다.
// 예를 들어, 함수가 무한 루프를 돌거나, 예외를 던지는 경우에 never 타입을 사용할 수 있다.

function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error('This function never returns');
}

let b: never;
// b = 1; // never 타입은 어떤 값도 할당할 수 없다.
// b = 'hello'; // b = true; // boolean 타입도 할당할 수 없다.
// b = {}; // object 타입도 할당할 수 없다.
// b = undefined; // undefined 타입도 할당할 수 없다.
// b = null; // null 타입도 할당할 수 없다.
