

function Clock(setAlarm) {
  this.time = setAlarm;
}

Clock.prototype.alarm = function (setTime) {
  var output = false;
  var currentTime = moment().format("HH:mm");
  setInterval(function(){
    if (currentTime === setTime) {
      output = true;
      $('#final').prepend('<li>' + 'wake up!' + '</li>')
    }
  }, 5000);
  return output;
};


exports.clockModule = Clock;
