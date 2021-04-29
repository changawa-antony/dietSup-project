
//Recipe page

$(document).ready(function() {
    $("#add-recipe").click(function() {
      $("#form-display").css("display", "block");
      $("#add-recipe").css("display", "none")
      
    });

    $("#upload-button").click(function() {
      $("#form-display").css("display", "none");
      $("#add-recipe").css("display", "inline-block");
        alert("Your recipe will be uploaded very soon. Thank you for taking part.");
    });

    
 
  });

  $(document).ready(function(){
    $("#recipe-one-show").click(function() {
      $("#recipe-one").css("display", "block");
      $("#recipe-one-show").css("display", "none");
      $("#recipe-one-hide").css("display", "block");
    });

    $("#recipe-one-hide").click(function() {
      $("#recipe-one").css("display", "none");
      $("#recipe-one-show").css("display", "block");
      $("#recipe-one-hide").css("display", "none");
    });
  });

  $(document).ready(function(){
    $("#recipe-two-show").click(function() {
      $("#recipe-two").css("display", "block");
      $("#recipe-two-show").css("display", "none");
      $("#recipe-two-hide").css("display", "block");
    });

    $("#recipe-two-hide").click(function() {
      $("#recipe-two").css("display", "none");
      $("#recipe-two-show").css("display", "block");
      $("#recipe-two-hide").css("display", "none");
    });
  });


  //Check diet

  $(document).ready(function(){
    $("#check-diet").click(function() {
      var foodOne = $("#foodone").val();
      var foodTwo = $("#foodtwo").val();
      var foodThree = $("#foodthree").val();

      var typeOne = $("#foodone-radio input[name=inlineRadioOptions]:checked").val();
      var typeTwo = $("#foodtwo-radio input[name=inlineRadioOptions]:checked").val();
      var typeThree = $("#foodthree-radio input[name=inlineRadioOptions]:checked").val();
      
      //food one

      if(typeOne == "carbohydrates"){
        var percentcarbsOne = 50;
      }

      if(typeOne == "proteins"){
        var percentcarbsOne = 20;
      }

      if(typeOne == "fats"){
        var percentcarbsOne = 30;
      }

      //for food two

      if(typeTwo == "carbohydrates"){
        var percentcarbsTwo = 50;
      }

      if(typeTwo == "proteins"){
        var percentcarbsTwo = 20;
      }

      if(typeTwo == "fats"){
        var percentcarbsTwo = 30;
      }

      //for food three

      if(typeThree == "carbohydrates"){
        var percentcarbsThree = 50;
      }

      if(typeThree == "proteins"){
        var percentcarbsThree = 20;
      }

      if(typeThree == "fats"){
        var percentcarbsThree = 30;
      }

      var totalType = percentcarbsOne + percentcarbsTwo + percentcarbsThree;

      if(totalType == 100){
        document.getElementById("other-links").style.display = "block";
        document.getElementById('alert-text').innerHTML = "Your Diet is balanced";
        document.getElementById('other-links').style.backgroundColor = "green";
      }
      else{
        document.getElementById("other-links").style.display = "block";
        document.getElementById('alert-text').innerHTML = "Your diet is not balanced";
        document.getElementById('other-links').style.backgroundColor = "red";
      }

      $("div#display-data").append(
        "<ul class='analysis-list' id='food-type-anylisis'>" +
        "<li>" + foodOne + " - " + typeOne + " -  " + percentcarbsOne+ "%</li>" +
        "<li>" + foodTwo + " -  " + typeTwo + " -  " + percentcarbsTwo+ "%</li>" +
        "<li>" + foodThree + " -  " + typeThree + " -  " + percentcarbsThree +"%</li>" +
        "</ul>"
      );

      $("#recipe-one-show").css("display", "block");

    })

  });
  
  