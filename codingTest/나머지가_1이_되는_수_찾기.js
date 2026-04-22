// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를
// return 하도록 solution 함수를 완성해주세요.
// 답이 항상 존재함은 증명될 수 있습니다.

//for문
function solution(n) {
  for (let x = 2; ; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

//while 문
function solution2(n) {
  let x = 2;
  while (true) {
    if (n % x === 1) return x;
    x++;
  }
}

console.log(solution(10)); //3
console.log(solution(12)); //11
