// 배열과 튜플

// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'Im', 'youngseo'];

let booArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, '2', true];

// JS로 변환하면서 튜플 기능이 빠지기에 push와 pop을 사용할때 각별히 조심해야 한다!
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const user: [string, number][] = [
  ['홍길동', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
  // [5, "최아무개"]
  // -> 튜플을 사용하면 순서가 잘못 들어감을 TS에서 감지 가능!
];
