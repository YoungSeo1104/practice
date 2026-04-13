/*
* 함수 타입 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
1. 반환값의 타입이 호환되는가
2. 매개변수의 타입이 호환되는가
*/

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

a = b;
//b = a; // 오류: B는 A의 반환값을 포함하지 않으므로 호환 불가능

//기준2. 매개변수가 호환되는가
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 
d = c;

type Animal = { name: string };
type Dog = { name: string; breed: string };

let animalFun = (animal: Animal) => {
    console.log(animal.name);
};
let dogFun = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.breed);
};
//animalFun = dogFun; // 오류: Dog는 Animal의 매개변수를 포함하지 않으므로 호환 불가능
dogFun = animalFun;

//매개변수를 기준으로 함수 타입 호환성을 판단할 때, 매개변수의 개수도 고려해야 합니다.
// 슈퍼 <- 서브 타입에서는 업 캐시팅이 가능하지만, 서브 <- 슈퍼 타입에서는 다운 캐스팅이 불가능합니다.


// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // Func2는 Func1의 매개변수 개수를 포함하므로 호환 가능
//func2 = func1; // 오류: Func1은 Func2의 매개변수 개수를 포함하지 않으므로 호환 불가능