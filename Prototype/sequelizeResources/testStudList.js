// When user clicks add-btn
$("#student-submit").on("click", function (event) {
  event.preventDefault();

  // Make a newStudent object
  var newStudent = {
    name: $("#name").val().trim(),
    address: $("#address").val().trim(),
    phone: $("#phone").val().trim(),
    email: $("#email").val().trim(),
    belt: $("#belt").val().trim(),
    stripes: $("#stripes").val().trim(),
    age: $("#age").val().trim(),
    gender: $("#gender").val().trim(),
    health_concerns: $("#health_concerns").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newStudent);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newStudent)
    // On success, run the following code
    .then(function () {

      var row = $("<div>");
      row.addClass("newStudent");

      row.append("<p>" + newStudent.name + " </p>");
      row.append("<p>" + newStudent.address + "</p>");
      row.append("<p>" + newStudent.phone + "</p>");
      row.append("<p>" + newStudent.email + "</p>");
      row.append("<p>" + newStudent.belt + "</p>");
      row.append("<p>" + newStudent.stripes + "</p>");
      row.append("<p>" + newStudent.age + "</p>");
      row.append("<p>" + newStudent.gender + "</p>");
      row.append("<p>" + newStudent.health_concerns + "</p>");
      row.append("<p>At " + moment(newStudent.created_at).format("h:mma on dddd") + "</p>");

      $("#student-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#address").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#belt").val("");
  $("#stripes").val("");
  $("#age").val("");
  $("#gender").val("");
  $("#health_concerns").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function (data) {

  if (data.length !== 0) {

    var table = $("<table>").addClass("student-table");

    for (var i = 0; i < data.length; i++) {

      var row = $("<tr>")
        .addClass("student-info")
        .append(`<td> ${data[i].name} </td> <td> ${data[i].address} </td> <td> ${data[i].phone} </td> || <td> ${data[i].email} </td> || <td> ${data[i].belt} </td> || <td> ${data[i].stripes} </td> || <td> ${data[i].age} </td> || <td> ${data[i].gender} </td> || <td> created at ${moment(data[i].created_at).format("h:mma on dddd")} </td><br><br><br><br>`)

      table.append(row);
    }

    $("#student-area").prepend(table);
  }

});