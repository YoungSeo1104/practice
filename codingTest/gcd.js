//gcd(최대공약수);
//알고리즘에서 많이 쓰인다고 하는데 gcd를 다음에 활용할 일이 있으려나..?

//Addition of fractions (분수의 덧셈)

//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,
// 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//입출력 예 #1 - 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
//입출력 예 #2 - 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

//type (x: number, y: number, z: number, q: number) => number;
const solution = (numer1, denom1, numer2, denom2) => {
  let denominator = denom1 * denom2; //분모
  let numerator = numer1 * denom2 + numer2 * denom1; //분자

  // 최대공약수
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(numerator, denominator);

  return [numerator / g, denominator / g];
};

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
console.log(solution(3, 3, 3, 3));
