// Any 타입
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = '문자열';

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar; // any는 모든 타입이 될 수 있기 때문에 에러가 나지 않음
// num.toFixed(); // any는 모든 메서드가 존재하기 때문에 에러가 나지 않음
// 런타임 에러 발생으로 바로 넘어감

// unknown 타입
let unknownVar: unknown = 10;
unknownVar = '문자열';
unknownVar = true;
unknownVar = {};
unknownVar = () => {};

// unknownVar.toUpperCase(); // unknown은 모든 메서드가 존재하지 않기 때문에 에러가 남
// unknownVar.toFixed(); // unknown은 모든 메서드가 존재하지 않기 때문에 에러가 남

// unknown 타입은 any와 달리 모든 타입이 될 수 있지만, 모든 메서드가 존재하지 않음
// unknown 타입은 any보다 안전한 타입이라고 할 수 있음

// unknown 타입을 사용하려면 타입 가드가 필요함
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase(); // unknownVar이 string 타입으로 좁혀졌기 때문에 toUpperCase 메서드를 사용할 수 있음
}

if (typeof unknownVar === 'number') {
  unknownVar.toFixed(); // unknownVar이 number 타입으로 좁혀졌기 때문에 toFixed 메서드를 사용할 수 있음
}

// unknown 타입은 any보다 안전한 타입이지만, 타입 가드를 사용하지 않으면 any와 마찬가지로 런타임 에러가 발생할 수 있음