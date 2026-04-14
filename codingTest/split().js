//String.prototype.split();
// string을 여러개의 문자열로 만들어주는 메서드
// .reverse()로 배열에서 뒤집어주고
// .join('')을 활용하여 string으로 다시 돌려주도록 짜보니 재밌는 것 같다.
// 처음에 .toString()을 활용해서 배열의 각 요소들이 쉼표(,)로 구분되어 하나의 문자열로 반환되어서 당황함🤣

//(type: string) => string;
const solution = (my_string) => {
  return my_string.split('').reverse().join('');
};

// const splitCheck = (my_string) => {
//   return my_string.split('').reverse();
// };

// console.log('splitCheck:', splitCheck('jaron'));

console.log(solution('jaron'));
console.log(solution('youngseo'));
