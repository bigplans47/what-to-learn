$(document).ready(function() {
  $(".javaresult").hide();
  $(".phpresult").hide();
  $(".rubyresult").hide();


  $("form#generalquestionsforcode").submit(function(event) {
    event.preventDefault();

    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var Name = $("#name").val();
    var total = question1 + question2 + question3 + question4 + question5;
    $("#output").text(Name);


    if (total >=1) {
      $("form#generalquestionsforcode").hide();
      $(".rubyresult").toggle();
    };
    // note add an if statement to do alert if answers add to less then 6 as question was not answered
  });
});
