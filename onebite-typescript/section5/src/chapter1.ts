/*
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: ''; //리터럴로 재정의
  isBark: boolean;
}

const dog: Dog = {
  // name: '뽀삐', // Animal 인터페이스의 name 프로퍼티는 string 타입이지만, Dog 인터페이스에서는 '' 리터럴 타입으로 재정의해서 오류
  name: '',
  color: '갈색',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
