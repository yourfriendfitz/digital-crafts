const uid = document.querySelector("#hidden").value;
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
    if (msg.uid === uid) {
      $("#messages").append(
        $(`
          <div class='userMessage'>
          <h6>${msg.user}</h6>
          <p>${msg.message}</p>
          </div>
          `)
      );
    } else {
      $("#messages").append(
        $(`
          <div class='message'>
          <h6>${msg.user}</h6>
          <p>${msg.message}</p>
          </div>
          `)
      );
    }
  });
});
