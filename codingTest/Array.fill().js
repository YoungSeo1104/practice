//Array.fill();

// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

//방식1
function solution1(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

//방식2
function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1));
}

//방식3
function solution3(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

console.log(solution2(2, 5)); //[2,4,6,8,10]
console.log(solution2(4, 3)); //[4,8,12]]
console.log(solution2(-4, 2)); //[-4,-8]

//정리 링크 - https://www.notion.so/youngbase/Array-fill-Array-from-329fb8f030b08090ac21eac4b00e9c00;
