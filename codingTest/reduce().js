//Array.prototype.reduce()
//각 배열 요소에 대해 제공된 함수를 한 번씩 실행.
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

//type(x: number) => number;
function solution(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  return sum;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //5.5