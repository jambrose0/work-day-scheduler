//dom elements
var workHours = document.getElementById("time-block");
var tasks = document.getElementById("task-block");
var saves = document
  .getElementById("store-block")
  .addEventListener("click", keepTasks());

//function to check time and apply css as needed
function handleUpdatingHours() {
  var timeNow = moment();
  if (timeNow < workHours) {
    tasks.classList.add("past");
  }
  if ((timeNow = workHours)) {
    tasks.classList.add("present");
  }
  if (timeNow > workHours) {
    tasks.classList.add("future");
  }
}
// use a for loop that iterates through each time value you have set as your time variables,
// for (var i = 0; i < timeNow; i++) {
//then it needs to compare each iteration of time with the current time from the previous variable
// if (i <= timeNow) {
//   tasks.setAttribute("class", "past");
// }
// }

//then the for loop can have a conditional that says what to do
//if the time block is before the current time, do this...
// else if it is equal to current time do this..
// else if it is greater than current time, do this.

//store text area function
function keepTasks() {
  var input = document.getElementById("task-block");
  localStorage.setItem("task-block", input);
  console.log("saved!!!!!!");
  //locally store items from text area as needed
  //retrieve tasks upon returning to page
}
function showTasks() {
  var output = localStorage.getItem("input");
}

//on click events

handleUpdatingHours();
showTasks();
