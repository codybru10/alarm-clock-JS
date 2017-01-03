$(document).ready(function(){
  $('#set-time').submit(function(event) {
    event.preventDefault();
    debugger;
    var setAlarm = $('#set').val();
    $('#final-alarm').empty();
    $('#final-alarm').prepend('Alarm Set: ' + setAlarm);
  });
});
