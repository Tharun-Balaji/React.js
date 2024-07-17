
const {createServer} = require("http");
const {Server} = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

const playerScores = [];

io.on("connection", (socket) => {
    // console.log(socket);
    socket.on("scores", (score) => {
        playerScores.push({...score, id: socket.id});
        // console.log(playerScores);
        socket.emit("playerScores", playerScores)
        // console.log(socket.id);
        setInterval(() => {
            socket.emit("playerScores", playerScores);
        },5000);
        
    });

   
    
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
})
