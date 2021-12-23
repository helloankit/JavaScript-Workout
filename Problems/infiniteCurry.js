// function add() {
//   const args = arguments;
//   let result = 0;
//   let context = this;
//   return (function curry() {
//     console.log(args);
//     if (args) {
//       result = add.apply(context, args);
//     }
//     function valueOf() {
//       return result;
//     }
//   })();
// }

// console.log(add(3).valueOf());
// // console.log(add(2)(3)(5)); //10
// // console.log(add(2)(3)(5)(5)(3)(4)); //22

function findMaxClusterSize() {
  let bootingPower = [3, 6, 1, 3, 4];
  let processingPower = [2, 1, 3, 4, 5];
  let powerMax = 25;

  let k = bootingPower.length; //5

  while (k > 1) {
    let maxBootingPower = findMaxBootingPower(bootingPower.slice(0, k));
    let sumOfProcessingPower = findSumOfProcessingPower(
      processingPower.slice(0, k)
    );

    // console.log({ maxBootingPower });
    // console.log({ sumOfProcessingPower });
    if (
      findNetPowerConsumption(maxBootingPower, sumOfProcessingPower, k) <=
      powerMax
    ) {
      return {
        k: k,
        power: findNetPowerConsumption(
          maxBootingPower,
          sumOfProcessingPower,
          k
        ),
      };
    }

    k--;
  }

  return 0;
}

function findNetPowerConsumption(maxBootingPower, sumOfProcessingPowers, k) {
  return maxBootingPower + sumOfProcessingPowers * k;
}

function findMaxBootingPower(bootPower) {
  return Math.max(...bootPower);
}

function findSumOfProcessingPower(processingPower) {
  function add(accumulator, a) {
    return accumulator + a;
  }

  return processingPower.reduce(add, 0);
}

console.log(findMaxClusterSize());
