//js - this 정리
//this는 함수가 호출될 때 결정된다.
//실행 중에는 할당으로 설정할 수 없고, 함수를 호출할 때마다 다 다르기에 
// ES5는 함수를 어떻게 호출했는지 상관하지 않고 this 값을 설정할 수 있는 bind 메서드를 도입했고,
// ES2015는 스스로의 this 바인딩을 제공하지 않는 화살표 함수를 추가했습니다. (이는 렉시컬 컨텍스트안에 this 값을 유지)
//화살표 함수에서의 this는 함수가 속해 있는 곳의 상위 this를 계승 받는다.

//(결론) 일반적으로는 함수를 bind() 메서드를 사용해서 this를 고정하나,
//함수 내부에서 사용할 경우에는 화살표 함수를 사용해서 this를 활용하는 것이 좋다.
//참고 링크 - [코딩알려주는 누나] https://youtu.be/tDZROpAdJ9w?si=pBFjvZbUIOSBfezr

console.log('1. car.getName() this');
const car = {
  name: 'KIA',
  getName: function () {
    console.log('this:', this);
  },
};
car.getName(); //car 객체

console.log('2. globalCar() this');
const globalCar = car.getName;
globalCar(); //window or global 객체

console.log('3-1. car2.getName() this');
const car2 = {
  name: 'hyundai',
  getName: car.getName,
};
car2.getName();

// .bind -> this 값을 고정시켜주는 역할!
console.log('3-2. bindGetname() this');
const bindGetname = car2.getName.bind(car);
bindGetname();

console.log('4. btn click this');
const btn = document.getElementById('button');
btn.addEventListener('click', car.getName);

console.log('4. btn bind click this');
const bindBtn = document.getElementById('bind-btn');
bindBtn.addEventListener('click', car.getName.bind(car));
