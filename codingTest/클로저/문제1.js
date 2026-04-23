// #스코프 #커링 #클로저
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

const myCurry = curry(sum);
const addTen = myCurry(10);

console.log(myCurry(10)(20)); //30
console.log(addTen(10)); //20
