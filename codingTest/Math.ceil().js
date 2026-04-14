//Math.ceil();
// 언제나 올림하여 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환!!
// 5.1 -> 6, -1.2 -> -1

// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 주어질 때,
// 모든 사람이 피자를 한 조각 이상 먹기 위해
// 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

const solution = (n) => Math.ceil(n / 7);

console.log(solution(7)); //1
console.log(solution(1)); //1
console.log(solution(15)); //3

// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
// 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면
// 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

const solution3 = (slice, n) => Math.ceil(n / slice);

console.log(solution3(7, 10)); //2
console.log(solution3(4, 12)); //3
