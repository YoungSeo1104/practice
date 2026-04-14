//Array.from();

//문제 - 1부터 100까지 홀수만 담긴 배열을 만드는 코드짜기

function solution(num) {
  //   return Array.from({ length: num }, (_, i) => 2 * (i + 1)); //짝수
  return Array.from({ length: num }, (_, i) => i * 2 + 1); //홀수
}

console.log('test:', solution(50)); // [1, 3, 5, ..., 99]


//정리 링크 - https://www.notion.so/youngbase/Array-fill-Array-from-329fb8f030b08090ac21eac4b00e9c00