const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log(`New connection!`);

    ws.on('message', (msg) => {
        console.log(`New message: ${msg}`);

        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(msg);
            }
        });
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('Connection has disconnected');
    });

    ws.on('error', (err) => {
        console.error(`An error has occurred: ${err.message}`);
        ws.close();
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
