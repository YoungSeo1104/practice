/*
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let A: StringNumberSwitch<number>;

let B: StringNumberSwitch<string>;

let C: StringNumberSwitch<number | string>;

let D: StringNumberSwitch<boolean | number | string>;

/*
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

//2단계
// number;
// never; -> 공집합으로 사라짐
// boolean

// 결과
//number | boolean


// 특정 타입만 추출하고 싶을때!
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
//string