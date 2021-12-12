
var table = document.getElementById("Table");
function addBottom(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var colCount = table.rows[1].cells.length;


  for (var i = 0; i < colCount; i++) {
    var newRow = row.insertCell(i);

    newRow.innerHTML = table.rows[1].cells[i].innerHTML;
    table.rows[rowCount].cells[i].addEventListener("click", function () {
      editText(this);
    }, false);

  }
}

function addTop() {                                     //this fun is only for top
  var table = document.getElementById("Table");
  var rowCount = table.rows.length;
  var row = table.insertRow(1);
  var colCount = table.rows[3].cells.length;
  for (let i = 0; i < colCount; i++) {
    var newRow = row.insertCell(i);
    newRow.innerHTML = table.rows[3].cells[i].innerHTML;
    table.rows[1].cells[i].addEventListener("click", function () {
      editText(this);
    }, false);

  }

}

function deleteRow(row) {
  var table = document.getElementById("Table");
  var rowCount = table.rows.length;
  if (rowCount > 2) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);
  }
  else {
    alert("Please specify at least one value.");
  }
}


if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
      table.rows[i].cells[j].addEventListener("click", function () {
        editText(this);
      }, false);
    }

  }
}


function editText(tableCell) {
  var txt = tableCell.innerText || tableCell.textContent;
  tableCell.innerText = tableCell.textContent = "";
  var input = document.createElement("input");
  input.type = "text";
  tableCell.appendChild(input);
  input.value = txt;
  input.focus();
  input.onblur = function () {
    tableCell.innerText = input.value;
    tableCell.textContent = input.value;
  }
}

function leaveCell(tableCell) {
  tableCell.innerText = input.value;
  tableCell.textContent = input.value;
}