import SocketIO from 'socket.io';
import redisAdapter from 'socket.io-redis';
import dotenv from 'dotenv';
dotenv.config();

import knex from '../config/knex';
import subscribe from '../config/subscribe';

const init = async ( server ) => {
    const io = SocketIO.listen(server);
    io.adapter(redisAdapter({
        host: process.env.REDIS_HOST,
        port: 6379
    }));

    //generate socket io namespace by the number of distinct target currency.
    let jobs = await knex.distinct('target').from('exchange_rate_jobs');
    let namespaces = jobs.map((_job) => {
        return [ _job.target.toLowerCase() , io.of(`/${_job.target.toLowerCase()}`)];
    });
    namespaces = new Map(namespaces);
    
    //subscribe to redis in order to know if there is a currency update in background cron service
    subscribe.subscribe('er_update');

    subscribe.on('message', (channel, ticker) => {
        ticker = JSON.parse(ticker);
        let namespace = namespaces.get(ticker.target.toLowerCase());
        namespace.emit('exchange_rate_update', JSON.stringify(ticker));
    });

}

export default { init };