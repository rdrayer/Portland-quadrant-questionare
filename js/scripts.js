$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#libations').show();
  } else if (age ===21) {
    alert("Be safe!");
    $('#libations').show();
  } else {
    $('#under21').show();
  }
})
