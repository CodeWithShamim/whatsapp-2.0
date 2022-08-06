const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
    mehtods: ["GET, POST"],
  },
});

// -------acitve user-----------
let activeUsers = [];
// ------add active user-------
const addActiveUser = (activeUser, socketId) => {
  const isActiveUser = activeUsers.some((au) => au?._id === activeUser?._id);
  if (!isActiveUser && activeUser) {
    activeUsers.push({ ...activeUser, socketId });
  }
};

io.on("connection", (socket) => {
  console.log("Socket is connecting....");

  // ------add active user-------
  socket.on("addActiveUser", (activeUser) => {
    addActiveUser(activeUser, socket.id);
    io.emit("getActiveUser", activeUsers);
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected");
  });
});
