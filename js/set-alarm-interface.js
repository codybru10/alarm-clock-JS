
var Clock = require('./../js/alarm.js').clockModule;

$(document).ready(function() {
  $('#set-time').submit(function(event) {
    event.preventDefault();
    var setAlarm = $('#set').val();
    $('#final-alarm').empty();
    $('#final-alarm').prepend('Alarm Set: ' + setAlarm);
    var alarmTime = new Clock(setAlarm);
    var output = alarmTime.alarm(alarmTime.time);

    // setInterval(function(){
    // debugger;
    //   var output = alarmTime.alarm(alarmTime.time);
    // }, 1000);

  });
});
