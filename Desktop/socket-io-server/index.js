const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(8000, function() {
  console.log("listening on port 8000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", function(socket) {
  console.log("made socket connection", socket.id);

  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });
});
