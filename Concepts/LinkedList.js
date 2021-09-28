// // function cal(value) {
// //   let acc = value;
// //   let obj = {
// //     add,
// //     subtract,
// //     val,
// //   };
// //   function add(value) {
// //     acc += value;
// //     return this;
// //   }
// //   function subtract(value) {
// //     acc -= value;
// //     return this;
// //   }
// //   function val() {
// //     return acc;
// //   }

// //   return obj;
// // }

// // let s = cal(2).add(5).subtract(4).val();
// // console.log(s);

// function maxWater(arr) {
//   let water = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     let left = arr[i];
//     for (let j = 0; j < i; j++) {
//       left = Math.max(left, arr[j]);
//     }

//     let right = arr[i];
//     for (let k = i + 1; k < arr.length - 1; k++) {
//       right = Math.max(right, arr[k]);
//     }

//     water += Math.min(left, right) - arr[i];
//   }

//   return water;
// }

// let res = maxWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// console.log(res);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = arr.length;
console.log(n);
let principalSum = 0;
let secondarySum = 0;

for (let i = 0; i < n; i++) {
  //Calculate secondary diagonal's sum
  //   secondarySum += arr[i][n - i + 1];

  //Calculate primary diagonal's sum
  for (let j = 0; j < n; j++) {
    if (i == j) principalSum += arr[i][j];
  }
}

console.log(principalSum);
console.log(secondarySum);
