function displayTime() {
  var now = new Date();
  var options = { weekday: 'short', year: 'numeric', month: 'short', 
  day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', 
  timeZoneName: 'long' };
  var time = now.toLocaleString('en-US', options);
  var result = document.createElement("div");
  result.innerHTML = "Current Time: " + time;
  document.getElementById("timeResult").appendChild(result);
}

function displayDate() {
  var now = new Date();
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  var date = now.toLocaleDateString('en-US', options);
  var result = document.createElement("div");
  result.innerHTML = "Current Date: " + date;
  document.getElementById("dateResult").appendChild(result);
}