if(jQuery){
 var checkAnswers = function(){
    var answerString = "";
    var answers = $(":checked");
    answers.each(function(i) {
      answerString = answerString + answers[i].value;
    });
    $(":checked").each(function(i) {
      var answerString = answerString + answers[i].value;
    });
    //alert(parseInt(answerString, 16));
    checkIfCorrect(answerString);
  };
  var checkIfCorrect = function(theString){
    if(parseInt(theString, 16) === 54956706525)
    {
        $("#result1").hide();
        $("#result").show();
    }
    else{
        $("#result").hide();
        $("#result1").show();
    }
  };
  window.addEventListener("load", function()
{
  document.getElementById("btn_submit").addEventListener("click", checkAnswers, false);
}, false);
  $("#music_question1").show();
  $("#dh_question1").show();
  $("#sp_question1").show();
  $("#game_question1").show();
  $("#game_question2").show();
};