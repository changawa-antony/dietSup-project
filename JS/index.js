$(document).ready(function() {
    $("#add-recipe").click(function() {
      $("#form-display").css("display", "block");
      $("#add-recipe").css("display", "none")
      
    });

    $("#upload-button").click(function() {
        $("#form-display").css("display", "none");
        $("#add-recipe").css("display", "inline-block")
          alert("Your recipe will be uploaded in a minute. Thank you for taking part.");
      });

      $('#myform')[0].reset();
  });