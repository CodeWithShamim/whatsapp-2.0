const io = require('socket.io');

io.on("connection", (socket) => {
    console.log("Socket is connecting....")

    socket.on("disconnect", () => {
        console.log("Socket is disconnected")
    })
})