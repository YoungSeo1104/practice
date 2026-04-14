// Array.prototype.reverse()
//처음에는 sort();를 사용하나 했는데 조건이 그냥 배열 뒤집기이기에 reverse()를 활용하는 것이 필요하다는 것을 확인함
//sort의 경우에는 number는 적용 안 되는 점을 기억하기!

//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

//(type : x: string[] | number[]) => string[] | number[];
const solution = (num_list) => num_list.reverse();

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution(['March', 'Jan', 'Feb', 'Dec']));
