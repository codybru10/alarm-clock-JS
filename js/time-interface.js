$(document).ready(function(){
  setInterval(function(){
    document.getElementById("time").innerHTML = moment().format('dddd YYYY, LTS');
  }, 1000);
});
