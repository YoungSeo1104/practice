/*
 * 함수 타입 정의
 */

import { get } from 'node:http';

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는 지 이야기
// 어떤 [타입의 ] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/*
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/*
 * 함수의 매개변수
 */
function introduc(name: string = '홍길동', tall?: number): void {
  console.log(`제 이름은 ${name}입니다.`);
  if (typeof tall === 'number') {
    console.log(`제 키는 ${tall}입니다.`);
  }
}

introduc('김철수', 180);
introduc(undefined);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
  return sum;
}

getSum(1, 2, 3, 4, 5);
getSum(1, 2, 3);
