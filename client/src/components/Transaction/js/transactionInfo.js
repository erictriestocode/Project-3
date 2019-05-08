/* global moment */

// When user clicks add-btn
$("#transreques-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newTransaction object
  var newTransaction = {
    Transaction_Desc: $("#Transaction_Desc").val().trim(),
    Tokens_Transaction_amount: $("#Tokens_Transaction_amount").val().trim(),
    User_Name_requesting_service: $("#User_Name_requesting_service").val().trim(),
    User_Name_Providing_service: $("#User_Name_Providing_service").val().trim(),
    TotalTokensBalance: $("#TotalTokensBalance").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newTransaction);

  // Send an AJAX POST-request with jQuery
  $.post("/api/transactions", newTransaction)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("usertest");

      row.append("<p>" + newTransaction.Transaction_Desc + "</p>");
      row.append("<p>" + newTransaction.Tokens_Transaction_amount + "</p>");
      row.append("<p>" + newTransaction.User_Name_requesting_service + "</p>");
      row.append("<p>" + newTransaction. User_Name_Providing_service + "</p>");
      row.append("<p>" + newTransaction. TotalTokensBalance+ "</p>");
      row.append("<p>At " + moment(newTransaction.created_at).format("h:mma on dddd") + "</p>");

      $("#test-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#Transaction_Desc").val("");
  $("#Tokens_Transaction_amount").val("");
  $("#User_Name_requesting_service").val("");
  $("#User_Name_Providing_service").val("");
  $("#TotalTokensBalance").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/transactions", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("usertest");

      row.append("<p>" + data[i].Transaction_Desc + "</p>");
      row.append("<p>" + data[i].Tokens_Transaction_amount + "</p>");
      row.append("<p>" + data[i].User_Name_requesting_service + "</p>");
      row.append("<p>" + data[i].User_Name_Providing_service + "</p>");
      row.append("<p>" + data[i].TotalTokensBalance + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#test-area").prepend(row);

    }

  }

});
//use for profile page
$.get("/api/transactions", function(data) {
  console.log(data)
    if (data.length !== 0 ) {
  
      for (var i = 0; i < data.length; i++) {
         if(data[i].id === 1){
        var row = $("<div>");
        row.addClass("profile");
  
       row.append("<p>" + data[i].User_Name_requesting_service+
      " Requested " +data[i].Tokens_Transaction_amount +
      " from "+ data[i].User_Name_Providing_service+ 
      " for "+data[i].Transaction_Desc+"</p>");
        row.append("<p> total tokens " + data[i].TotalTokensBalance + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        $("#profile-area").prepend(row);
  
      }
      }
    }
  });