import express from 'express';
import cors from 'cors';
import SocketIO from 'socket.io';
import redisAdapter from 'socket.io-redis';

import Socket from './socket';

let app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Setup");
});

let server = app.listen(3000, () => {
    console.log('App running');
});

//Setup Socket.IO
Socket.init(server);