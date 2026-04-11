// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toFixed();

// string
let str1: string = 'hello';
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 임시로 number에 null을 넣을 경우 - tsconfig.json에 "strictNullChecks": false 넣기
// let numA: number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
let strA: 'hello' = 'hello';
let boolA: true = false;
