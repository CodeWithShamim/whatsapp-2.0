const io = require('socket.io')(8000, {
    cors: {
        origin: "*",
        mehtods: ["GET, POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Socket is connecting....")

    socket.on("disconnect", () => {
        console.log("Socket is disconnected")
    })
})