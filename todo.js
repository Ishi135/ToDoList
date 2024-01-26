function addTask() {
  var taskInput = document.getElementById("task");
  var dateInput = document.getElementById("date");

  var task = taskInput.value;
  var date = dateInput.value;

  if (task === "" || date === "") {
    alert("Please enter both task and date.");
    return;
  }

  var formattedDate = formatDate(date);

  var table = document.getElementById("taskTable");
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = task;
  cell2.innerHTML = formattedDate;
  cell3.innerHTML = '<button class="delete" onclick="deleteTask(this)">Delete</button>';

  taskInput.value = "";
  dateInput.value = "";
}

function deleteTask(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function formatDate(inputDate) {
  var date = new Date(inputDate);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  return day + '-' + month + '-' + year;
}
