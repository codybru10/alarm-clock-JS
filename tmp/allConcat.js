
debugger;
var Clock = require('./../js/alarm.js').clockModule;

$(document).ready(function() {
  $('#set-time').submit(function(event) {
    event.preventDefault();
    var setAlarm = $('#set').val();
    $('#final-alarm').empty();
    $('#final-alarm').prepend('Alarm Set: ' + setAlarm);
    // var alert = new Clock(setAlarm);
    // var output = alert.alarm(alert);

  });
});



$(document).ready(function(){
  setInterval(function(){
    $("#time").text(moment().format('dddd YYYY, LTS'));
  }, 1000);

});
