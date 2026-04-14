//삼항연산자 활용 (조건 ? '' : '')
//처음에는 if문으로 작성했지만, 가독성 면에서는 삼항연산자가 좋았다.

// 각도기(angle)(문제)
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각,
//  90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
// 각 angle이 매개변수로 주어질 때
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

//type (x: number) => number || string;
function solution(angle) {
  angleCheck = angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
  return angle !== 0 ? angleCheck : '각도기 범위는 1~180도 입니다.';
}
