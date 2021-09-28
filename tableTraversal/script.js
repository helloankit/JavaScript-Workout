document
  .getElementById("search-by-marks")
  .addEventListener("click", searchByMarks);

document.getElementById("find-topper").addEventListener("click", findTopper);

document
  .getElementById("find-top-std")
  .addEventListener("click", findTopNStudents);

const tableRows = Array.from(document.getElementById("tab").rows);

/**
 * Find Top-N students based on a parameter N (received through input)
 */
function findTopNStudents() {
  const topNContainer = document.getElementById("top-std");
  topNContainer.innerHTML = "";
  let n = document.getElementById("find-top-std-input").value;
  result = [];

  for (let i = 1; i < tableRows.length; i++) {
    let currentScore = tableRows[i].cells[1].innerText;
    result.push({
      name: tableRows[i].cells[0].innerText,
      marks: tableRows[i].cells[1].innerText,
    });
  }

  if (n === "") n = result.length;

  result.sort((x, y) => y.marks - x.marks).splice(n, result.length - 1);
  console.log({ result });
  renderTable(result, topNContainer);
}

/**
 * Search for a specific student, based on the marks (received through input)
 */
function searchByMarks() {
  const tableContainer = document.getElementById("search-table");
  tableContainer.innerHTML = "";
  const marks = document.getElementById("search-by-marks-input").value;

  if (marks === "") {
    alert("Please enter the marks!");
    document.getElementById("search-by-marks-input").value = "";
    return;
  }

  let result = [];
  for (let i = 1; i < tableRows.length; i++) {
    let currentScore = tableRows[i].cells[1].innerText;
    if (currentScore === marks) {
      result.push({
        name: tableRows[i].cells[0].innerText,
        marks: tableRows[i].cells[1].innerText,
      });
    }
  }
  if (result.length) {
    renderTable(result, tableContainer);
  } else {
    document.getElementById("search-by-marks-input").value = "";
    alert("No Data Found!");
    return;
  }
}

/**
 * Find Topper based on parsing the score in the table
 */
function findTopper() {
  let topper = { name: "", marks: 0 };

  for (let i = 1; i < tableRows.length; i++) {
    let currentScore = tableRows[i].cells[1].innerText;
    if (currentScore > topper.marks) {
      topper.marks = currentScore;
      topper.name = tableRows[i].cells[0].innerText;
    }
  }

  const topperElement = document.getElementById("topper");

  topperElement.innerText = `Topper is : ${topper.name} with ${topper.marks} marks!`;
  topperElement.style.display = "block";
}

/**
 * Loops through the result parameter array
 * and render a table in the container parameter
 */
function renderTable(result, container) {
  const table = document.createElement("table");
  const thName = document.createElement("th");
  thName.textContent = "Name";

  const thScore = document.createElement("th");
  thScore.textContent = "Score";

  table.append(thName, thScore);

  for (let row of result) {
    console.log({ row });
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerText = row.name;

    let tdScore = document.createElement("td");
    tdScore.innerText = row.marks;

    tr.append(tdName);
    tr.append(tdScore);
    table.append(tr);
  }

  // console.dir(table);
  container.append(table);
  container.style.display = "block";
}
