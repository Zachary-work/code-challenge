import express from 'express';
import cors from 'cors';
import SocketIO from 'socket.io';
import redisAdapter from 'socket.io-redis';

import Socket from './socket';

import exchangeController from './controller/exchange_rate/usd';
import currencyController from './controller/currency';
import { addHook } from 'pirates';

let app = express();

app.use(cors());

app.use('/exchange_rate', exchangeController);
app.use('/currencies', currencyController);

app.get('/alive', (req, res) => {
    res.send("I am alive, don't worry :)");
});

let server = app.listen(3000, () => {
    console.log('App running');
});

//Setup Socket.IO
Socket.init(server);