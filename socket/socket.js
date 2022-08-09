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
    console.log(user);
    // --------send messsage--------
    if (user !== undefined) {
      io.to(user?.socketId).emit("getMessage", data);
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
