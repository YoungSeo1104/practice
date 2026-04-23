//#스코프 #let #var #비동기 함수 #콜백함수 #클로저 #호이스팅
let x = 1;

function outer() {
  let x = 2;
  setTimeout(() => {
    console.log('A1', x); //3. ReferenceError(TDZ)
    let x = 3;
  }, 0);
  function inner() {
    console.log('A2', x); //1. undefined
    var x = 4;
  }
  inner();
}

outer();
console.log('A3', x); //2. 1