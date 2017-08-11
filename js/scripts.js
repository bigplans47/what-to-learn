// back end

var xx = $("input:radio[name=question1]:checked").val();


// front end
$(document).ready(function() {
  $("form#generalinfo").submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var Name = $("#name").val();
    var total = question1 + question2 + question3 + question4 + question5
    $("#output").text(Name);
  });
});
