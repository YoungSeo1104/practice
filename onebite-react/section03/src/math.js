//math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// "type": "commonjs"
// module.exports = {
//   add,
//   sub,
// };

// "type": "module"
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
