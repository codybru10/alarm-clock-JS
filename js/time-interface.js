

$(document).ready(function(){
  setInterval(function(){
    $("#time").text(moment().format('dddd YYYY, LTS'));
  }, 1000);

});
