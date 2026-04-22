//두 정수 X, Y의 임의의 자리에서 공통으로 나타나는
// 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는
// 가장 큰 정수를 두 수의 짝꿍이라 합니다
// (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).

//  X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다.
// X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면,
// X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로
// 만들 수 있는 가장 큰 정수인 330입니다.
// 다른 예시로 X = 5525이고 Y = 1255이면
// X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로
// 만들 수 있는 가장 큰 정수인 552입니다
// (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)

// 두 정수 X, Y가 주어졌을 때,
// X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

function solution(X, Y) {
  const xStr = X.toString();
  const yStr = Y.toString();

  let array = [];

  for (let a = 0; a <= 9; a++) {
    const str = String(a);

    const xCount = xStr.split(str).length - 1;
    const yCount = yStr.split(str).length - 1;
    const minCount = Math.min(xCount, yCount);

    for (let i = 0; i < minCount; i++) {
      array.push(str);
    }
  }
  if (array.length === 0) return '-1';
  if (array.every((i) => i === '0')) return '0';
  return array.sort((a, b) => b - a).join('');
}

// 다른 사람 풀이
function solution2(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join('');
}

console.log(solution(100, 2345)); //-1
console.log(solution(100, 203045)); //0
console.log(solution(100, 123450)); //10
console.log(solution(12321, 42531)); //321
console.log(solution(5525, 1255)); //552
