// "type": "commonjs", 방법 1
// const moduleData = require('./math');
// console.log(moduleData);
// console.log(moduleData.add(12, 3));
// console.log(moduleData.sub(12, 3));

// "type": "commonjs", 방법 2
// const { add, sub } = require('./math');

// "type": "module" 방법 [ES모듈 방법]
import mul, { add, sub } from './math.js';

console.log(add(12, 3));
console.log(sub(12, 3));
console.log(mul(12, 3));
