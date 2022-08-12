const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const authRoute = require("./routes/authRoute");
const messageRoute = require("./routes/messageRoute");
const http = require("http");
const socket = require("socket.io");

// ----------connect databse---------------------------------
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z1tbp5w.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("database connected..........");
  })
  .catch((error) => {
    console.log(error);
    console.log();
  });
// -------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Running");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", authRoute);
app.use("/message", messageRoute);

// ---------------------------------create socket server---------------------------------------
// const io = require("socket.io")(8000, {
//     cors: {
//       origin: "*",
//       mehtods: ["GET, POST"],
//     },
//   });

const server = http.createServer(app);
const io = socket(server);

// -------acitve user-----------
let activeUsers = [];
// ------add active user-------
const addActiveUser = (activeUser, socketId) => {
  const isActiveUser = activeUsers.some((au) => au?._id === activeUser?._id);
  if (!isActiveUser && activeUser) {
    activeUsers.push({ ...activeUser, socketId });
  }
};

// remove active user
const removeActiveUser = (disconnectSocketId) => {
  activeUsers = activeUsers?.filter(
    (activeUsr) => activeUsr.socketId !== disconnectSocketId
  );
};
// ---------check frind---------
const findFriend = (fdId) => {
  if (activeUsers) {
    return activeUsers?.find((activeUser) => activeUser._id === fdId);
  }
};

io.on("connection", (socket) => {
  console.log("Socket is connecting....");

  // ------add active user-------
  socket.on("addActiveUser", (activeUser) => {
    addActiveUser(activeUser, socket?.id);
    io.emit("getActiveUser", activeUsers);
  });

  // received message
  socket.on("sendMessage", (data) => {
    const user = findFriend(data?.receiverId);
    // --------send messsage--------
    if (user !== undefined) {
      io.to(user?.socketId).emit("getMessage", data);
    }
  });

  // --------received typing message--
  socket.on("typingMessage", (typingData) => {
    const user = findFriend(typingData?.receiverId);
    // --------send messsage--------
    if (user !== undefined) {
      io.to(user?.socketId).emit("getTypingMessage", typingData);
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected");
    removeActiveUser(socket?.id);
    setTimeout(() => {
      io.emit("getActiveUser", activeUsers);
    }, 1000);
  });
});
// -----------------------------------------------------------------------------------

server.listen(port, () => {
  console.log("Listening to port........", port);
});
