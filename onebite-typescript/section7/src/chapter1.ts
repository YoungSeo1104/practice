// 첫번째 사례

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

// 두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
console.log(num);

let str = returnFirstValue(['hello', 'mynameis']);
console.log(str);

//세번째 사례
interface InterfaceA {
  length: number;
}

interface IntetfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  console.log('getLength:', data.length);

  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength('12345');

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
