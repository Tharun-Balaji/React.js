
const {createServer} = require("http");
const {Server} = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

socket.on("connection", (socket) => {
    // console.log(socket);

    socket.on("message", (data) => {
        console.log(data);
    })

    socket.emit("message", "hello world!");
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
})
