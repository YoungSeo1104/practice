//빈요소와 배열의 순회

// var arr1 = [];
// arr1.length = 3;
// console.log(arr1);

// var arr2 = new Array(3);
// console.log(arr2);

// var arr3 = [undefined, undefined, undefined];
// console.log(arr3);

var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {
  console.log('arr1.forEach:', v, i);
});
arr2.forEach(function (v, i) {
  console.log('arr2.forEach:', v, i);
});

arr1.map(function (v, i) {
  console.log('arr1 - map:', v + i);
});

arr2.map(function (v, i) {
  console.log('arr2 - map:', v + i);
});

arr1.filter(function (v) {
  console.log('arr1 - filter:', !v);
});

arr2.filter(function (v) {
  console.log('arr2 - filter:', !v); //
});

arr1.reduce(function (p, c, i) {
  console.log('arr1 - reduce:', p + c + i); //undefined011
}, '');

arr2.reduce(function (p, c, i) {
  console.log('arr2 - reduce:', p + c + i); //11
}, '');
