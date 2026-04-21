// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// split: 문자열 → 배열
// "123".split('')    // ['1','2','3']

// join: 배열 → 문자열
// ['1','2','3'].join('')  // "123"

function solution(n) {
  return +n
    .toString()
    .split('')
    .map((i) => Number(i))
    .sort((a, b) => b - a)
    .join('');
}

console.log(solution(118372)); //873211

//다른 사람 풀이
function solution2(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}