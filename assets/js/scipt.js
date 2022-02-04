//dom elements
var workHours = document.getElementById("time-blocks");
var tasks = document.getElementById("task-blocks");
var saves = document.getElementById("store-blocks");

//global vars
// var workDay =

//time-blocks
// function workDay() {
//   moment().startOf("day");
//   for (var index = 9; index <= 16; index++) {
//     var makeRow = $("<div>").addClass("row");
//     var makeTime = $("<h3>", +index)
//       .addClass("hour col-1 col-md-2 col-sm-2")
//       .attr("id", "time-block");

//     var makeTask = $("<textarea>")
//       .addClass("description col-10 col-md-8 col-sm-8")
//       .attr("id", "task-blocks" + index);

//     var makeSave = $("<button>")
//       // .add("")
//       .addClass("saveBtn col-1 col-md-2 col-sm-2")
//       .attr("id", "store-block" + "Save" + index);

//     makeRow.append(makeTime);
//     makeRow.append(makeTask);
//     makeRow.append(makeSave);
//     var toPrint = moment(workDay)
//       .add(1 + index, "hours")
//       .format("hh:mm A");
//     $("#schedules").append(makeRow);
//   }
// }
//click event, save info from tasks section to localStorage

// workDay();
