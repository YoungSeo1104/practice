/** 
import { an } from '../node_modules/@types/node/wasi.d';
 * * Unknown Type * -> 전체 집합
    * - 모든 타입의 슈퍼 타입
    * - 다운 캐스트 허용
    * - 타입 안정성 보장
    *  
 **/

function unknownExam() {
  let a: unknown = 10;
  let b: unknown = 'Hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = { name: 'John', age: 30 };
  let g: unknown = [1, 2, 3];
  let h: unknown = () => console.log('Hello');

  let unkonwnVar: unknown;

  // let num: number = unkonwnVar; // Error: Type 'unknown' is not assignable to type 'number'.
  // let str: string = unkonwnVar;  // Error: Type 'unknown' is not assignable to type 'string'.
  // let bool: boolean = unkonwnVar; // Error: Type 'unknown' is not assignable to type 'boolean'.
  // let obj: object = unkonwnVar;   // Error: Type 'unknown' is not assignable to type 'object'.
  // let arr: any[] = unkonwnVar;    // Error: Type 'unknown' is not assignable to type 'any[]'.
  // let func: () => void = unkonwnVar; // Error: Type 'unknown' is not assignable to type '() => void'.
}

/**
 * * Never Type * -> 공집합
 * - 어떤 값도 가질 수 없는 타입
 * - 함수가 정상적으로 종료되지 않는 경우에 사용
 * - 예외를 던지거나 무한 루프를 도는 함수의 반환 타입으로 사용
 * - 모든 타입의 서브 타입이자 자신만의 서브 타입
 * - 다운 캐스트 허용
 * - 타입 안정성 보장 안됨
 **/

function neverExam() {
  function neverFunc(): never {
    while (true) {
      // 무한 루프
    }
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  let obj: object = neverFunc();
  let arr: any[] = neverFunc();
  let func: () => void = neverFunc();

  // let never1: never = 10;
  // let never2: never = "Hello";
  // let never3: never = true;
}

/**
 * Void Type *
 */
function voidExam(): void {
  console.log('This function returns void.');

  let voidVar: void = undefined;
}

/**
 * any 타입 -> 치트키로 타입 계층도를 무시함
 * 모든 타입의 슈퍼 타입이자 서브 타입
 * 다운 캐스트 허용
 * 타입 안정성 보장 안됨
 */

function anyExam() {
  let unkonwnVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unkonwnVar; // 다운 캐스트
  undefinedVar = anyVar; // 다운 캐스트
//   neverVar = anyVar; // 다운 캐스트, never 타입은 공집합이기에 any 형식은 never 형식에 할당할 수 없다.
}
