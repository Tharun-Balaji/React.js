
const socket = io("http://localhost:3000/");

socket.on("connect", (response) => {
    console.log(response);
});

socket.on("message", (message) => {
    console.log(message);

    socket.emit("message", "Hello there!");
})