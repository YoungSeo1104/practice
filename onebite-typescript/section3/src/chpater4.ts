/*
* 대수 타입
-> 대수 타입은 여러 타입을 조합하여 새로운 타입을 만드는 방법입니다.
-> 대수 타입에는 합집합 타입과 교집합 타입이 있습니다.
*/ 

// 1.합집합 타입 (Union Types)

let a: string | number | boolean; // a는 string 또는 number 타입을 가질 수 있음
a = 'Hello';
a = 42;
a = true;

let arr: (string | number | boolean)[] = [1, 'two', true];

type Dog = {
    name: string;
    color: string
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",  
};

let union2: Union1 = {
    name: "",
    language: ""
}

let union3: Union1 = { 
    name: "",
    color: "",
    language: ""
}

// -> 객체 타입간의 교집합은 공통된 프로퍼티를 갖는 값이 아닌, 두 객체 타입에 명시된 모든 포르퍼티를 갖는 값!
// 때문에 union4는 오류가 발생함

// let union4: Union1 = {
//     name: "",
// }

// 2. 교집합 타입 (Intersection Types)

let variable: string & number; 

type Dog2 = {
    name: string;
    color: string
}

type Person2 = {
    name: string;
    language: string;
}

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
}
