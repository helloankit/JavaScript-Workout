const arr = [1, 2, 3, 4, 6, 6, 5, 3, 6, 2, 1, 10];

const removeDuplicates = (arr) => {
  let uniqueArray = [];
  let uniqueElementsMap = {};
  for (let itr = 0; itr < arr.length; itr++) {
    if (!uniqueElementsMap[arr[itr]]) {
      uniqueElementsMap[arr[itr]] = 1;
    }
  }

  const keys = Object.keys(uniqueElementsMap);

  for (let itr = 0; itr < keys.length; itr++) {
    uniqueArray.push(keys[itr]);
  }

  return uniqueArray;
};

console.log(removeDuplicates(arr));
