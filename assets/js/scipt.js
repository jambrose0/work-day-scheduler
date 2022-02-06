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
  // get localStorage here
  var readTask = localStorage.getItem($(this).text(""));
  $(this).text(readTask);
});

$(".saveBtn").click(function () {
  var taskSaver = localStorage.setItem(
    $(this).siblings("h3").attr("id"),
    $(this).siblings("textarea").text()
  );
  console.log(taskSaver);
});

// var taskSaver = function (event) {
//   event.preventDefault();
//   localStorage.setItem(
//     $(this).siblings("h3").attr("id"),
//     $(this).siblings("textarea").text("")
//   );
//   console.log("rawr");
// };

// saveBtn.on("click", taskSaver);
