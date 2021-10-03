function solution() {
  let tables = Array.from(document.getElementsByTagName("table"));
  let result = Array(tables.length);

  /* Initializing the result array */
  for (let itr = 0; itr < result.length; itr++) {
    result[itr] = 0;
  }

  /* Iterate through every table, then iterate through every row to count their
   * respective cell count, and append the count to the result array */
  for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
    let currentTable = tables[tableIndex];
    let cellCount = 0;
    for (let rowIndex = 0; rowIndex < currentTable.rows.length; rowIndex++) {
      cellCount += currentTable.rows[rowIndex].cells.length;
    }

    result[tableIndex] = cellCount;
  }

  let max = findMax(result);
  return max;
}

/*
 * Added findMax function to avoid using Math.max() with spread operator,
 * which will break in IE and will fail or return wrong results in other browsers
 * if number of elements in the result array are very high
 */
function findMax(arr) {
  let max = 0;
  for (let itr = 0; itr < arr.length; itr++) {
    if (arr[itr] > max) {
      max = arr[itr];
    }
  }
  return max;
}

console.log(solution());
