// 양의 정수 x가 하샤드 수이려면
// x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고,
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수,
// solution을 완성해주세요.

function solution(x) {
  const n = x
    .toString()
    .split('')
    .map((i) => +i)
    .reduce((a, c) => a + c, 0);

  return x % n == 0;
}

//다른 사람 풀이
function solution2(x) {
  const n = String(x)
    .split('')
    .reduce((a, c) => a + +c, 0);
  return x % n === 0;
}

function solution3(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false
