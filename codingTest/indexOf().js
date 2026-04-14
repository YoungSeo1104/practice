//indexOf();
//0부터 시작하는 인덱스를 반환, 못 찾으면 -1을 반환함

// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
// 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

//(type x: number Array, y: number) => number;
const solution = (array, height) => {
  array.push(height);
  return array.sort((a, b) => b - a).indexOf(height);
};

//다른 사람의 풀이를 보니 - filter()를 사용하심!
const solution2 = (array, height) => {
  return array.filter((item) => item > height).length;
};

console.log(solution([149, 180, 192, 170], 167)); //3
console.log(solution([180, 120, 140], 190)); //0
console.log(solution2([149, 180, 192, 170], 167)); //3
