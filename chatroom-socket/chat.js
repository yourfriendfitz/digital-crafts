$(function() {
  var socket = io();
  $("form").submit(function(e) {
    e.preventDefault(); // prevents page reloading
    socket.emit("chat message", {
      message: $("#m").val(),
      uid: $("#hidden").val()
    });
    $("#m").val("");
    return false;
  });
  socket.on("chat message", function(msg) {
    $("#messages").append(
      $(`
    <div id='userMessage'>
    <h6>${msg.user}</h6>
    <p>${msg.message}</p>
    </div>
    `)
    );
  });
});
