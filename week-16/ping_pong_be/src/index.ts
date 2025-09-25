import { WebSocketServer } from "ws";


const wss = new WebSocketServer({port: 3030});

wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong")
        }
    })
});