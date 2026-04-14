//Array.prototype.sort();
//sort((a,b) => a - b); 오름차순
//sort((a,b) => b - a); 내림차순

// (문제1)
//정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// (type: x: number[]) => number
const solution = (numbers) => {
  let numberList = numbers.sort((a, b) => b - a);
  return numberList[0] * numberList[1];
};

console.log(solution([1, 2, 3, 4, 5])); //20
console.log(solution([0, 31, 24, 10, 1, 9])); //744

// (문제2)
//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution2(sides) {
  let list = sides.sort((a, b) => a - b);
  return list[2] < list[0] + list[1] ? 1 : 2;
}

console.log(solution2([1, 2, 3])); //2
console.log(solution2([3, 6, 2])); //2
console.log(solution2([199, 72, 222])); //1
