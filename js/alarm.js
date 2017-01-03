

function Clock(setAlarm) {
  this.time = setAlarm;
}

Clock.prototype.alarm = function (setTime) {
  alert("works");
  debugger;

  var currentTime = currentTime.moment().format('dddd YYYY, LTS');
  setInterval(function(){
    if (currentTime === setTime) {
      alert("Wake up!");
    }
    return;
  }, 1000);

};


exports.clockModule = Clock;
