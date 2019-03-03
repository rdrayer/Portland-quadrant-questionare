$(document).ready(function() {
  $("form#quad").submit(function() {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var coffee = parseInt($("input:radio[name=coffee]:checked").val());
    var team = parseInt($("input:radio[name=team]:checked").val());
    var brunch = parseInt($("input:radio[name=brunch]:checked").val());
    var park = parseInt($("input:radio[name=park]:checked").val());
    var total = age + coffee + team + brunch + park;

    if (total > 1 && total <= 6) {
      $("#burbs").show();
    } else if (total >=7 && total <=12) {
      $("#sene").show();
    } else if (total >=13 && total <=18) {
      $("#nw").show();
    } else if (total >=19 && total <=24) {
      $("sw").show();
    }
  });
});
