/* global moment */

// When user clicks add-btn
$("#info-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newUser object
  var newUser = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
    name: $("#name").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newUser);

  // Send an AJAX POST-request with jQuery
  $.post("/api/users", newUser)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("usertest");

      row.append("<p>" + newUser.email + "</p>");
      row.append("<p>" + newUser.password + "</p>");
      row.append("<p>" + newUser.name + "</p>");
      row.append("<p>At " + moment(newUser.created_at).format("h:mma on dddd") + "</p>");

      $("#test-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#email").val("");
  $("#password").val("");
  $("#name").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/users", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("usertest");

      row.append("<p>" + data[i].email + "</p>");
      row.append("<p>" + data[i].password + "</p>");
      row.append("<p>" + data[i].name + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#test-area").prepend(row);

    }

  }

});
