import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        ws.send(`Hello, you sent -> ${message}`);
    })
});