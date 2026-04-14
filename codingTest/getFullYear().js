//Date.prototype.getFullYear()

//출생년도 계산

let today = new Date();
let year = today.getFullYear();

//type (x: number) => number;
const BirthYear = (age) => year - age + 1;

console.log(BirthYear(30));
