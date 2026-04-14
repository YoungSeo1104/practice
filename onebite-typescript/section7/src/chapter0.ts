/*
 * 제네릭 (일반적인, 포괄적인)
 */

// 제네릭 함수 -> 모든 타입을 두루두루 사용할 수 있는 범용적인 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func('string');

let arr = func([1, 2, 3]);

let arr2 = func<[number, number, number]>([1, 2, 3]); //튜플 타입

