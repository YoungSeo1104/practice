/*
* 타입 추론
*/

let a: number = 10; // 명시적 타입 선언
let b = 20; // 타입 추론에 의해 b는 number 타입으로 추론됨
let c = 'hello'; // c는 string 타입으로 추론됨
let d = {
    id: 1,
    name: 'Alice',
    profile: {
        nickname: 'Ally',
    },
    urls: ["https://example.com"],
};

let { id, name, profile } = d;

let [one, two, three] = [1, 'two', true];  

function func(msg = 'hello') {
    return "hello" // 반환값이 string 타입으로 추론됨
}

let e;
e = 10;
e.toFixed();

e = 'hello';
e.toUpperCase();
// e.toFixed(); // 오류: toFixed는 number 타입에서만 사용 가능

const num = 10;
