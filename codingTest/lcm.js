//lcm(최소공배수);

// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

const solution = (n) => {
  let pizza = 1;

  while ((pizza * 6) % n !== 0) {
    pizza++;
  }

  return pizza;
};
console.log(solution(6)); //1
console.log(solution(10)); //5
console.log(solution(4)); //2

//다른 사람 풀이
function solution2(n) {
  return (
    Array(6)
      .fill(n)
      .map((v, idx) => (v = v * (idx + 1)))
      .find((v) => v % 6 === 0) / 6
  );
}

console.log('solution2:', solution2(10));

//최소공배수 버전
function solution3(n) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  return n / gcd(n, 6);
}
console.log('solution3:', solution3(10));
