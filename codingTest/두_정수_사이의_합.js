// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  const arr = [a, b];
  const arrSort = arr.sort((x, y) => x - y);
  let answer = 0;
  if (a == b) return a;

  for (let i = arrSort[0]; i <= arrSort[1]; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5)); //12
console.log(solution(3, 3)); //3
console.log(solution(5, 3)); //12

//다른 사람 풀이1
function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(adder(3, 5));

//다른 사람 풀이2
function adder2(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

console.log(adder2(3, 5));
