//dom elements
var timeBlocks = document.getElementById("time-blocks");

var workDay = moment().startOf("day");

for (var i = 0; i < workDay; i++) {
  var toPrint = moment(workDay)
    .add(1 + i, "hours")
    .format(hhA);
  console.log(toPrint);
}
