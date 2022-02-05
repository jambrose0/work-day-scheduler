var timeArray = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
var tasks = $("textarea");
var saveBtn = $(".saveBtn");

var displayTime = function () {
  var time = moment().format("dddd,h:mm a");
  $("#currentDay").html(time);
};

$(document).ready(function () {
  displayTime();
});
$("h3").each(function (index) {
  $(this).text(timeArray[index]);
});
$("textarea").each(function (index) {
  if (index + 8 < moment().hours()) {
    $(this).addClass("past");
  } else if (index + 8 === moment().hours()) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
  //get localStorage here
});

var saveTasks = function (event) {
  event.preventDefault();
  localStoreage.setItem($(this).$("textarea"));
};

//dom elements
// var workHours = document.getElementById("time-block");
// var saves = document
//   .getElementById("store-block")
//   .addEventListener("click", keepTasks);

// function taskChecker() {
//   for (var i = 0; i <= workHours[index]; i++);
//   if (workHours < displayTime) {
//     tasks.classList.add("past");
//   }
//   if ((workHours = displayTime)) {
//     tasks.classList.add("present");
//   }
//   if (workHours > displayTime) {
//     tasks.classList.add("future");
//   }
// }

// function handleUpdatingHours() {
//   if (timeNow < workHours) {
//     tasks.classList.add("past");
//   }
//   if ((timeNow = workHours)) {
//     tasks.classList.add("present");
//   }
//   if (timeNow > workHours) {
//     tasks.classList.add("future");
//   }
// }
// use a for loop that iterates through each time value you have set as your time variables,
//then it needs to compare each iteration of time with the current time from the previous variable

//then the for loop can have a conditional that says what to do
//if the time block is before the current time, do this...
// else if it is equal to current time do this..
// else if it is greater than current time, do this.

//store text area function
// function keepTasks() {
//   var input = document.getElementById("task-block");
//   localStorage.setItem("task-block", input);
//   //locally store items from text area as needed
//   //retrieve tasks upon returning to page
// }
// function showTasks() {
//   var output = localStorage.getItem("task-block");
// }

//on click events

// handleUpdatingHours();
// showTasks();
// taskChecker();
