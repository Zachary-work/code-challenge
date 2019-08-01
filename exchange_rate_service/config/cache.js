import redis from 'redis';
import Promise from 'bluebird';
import dotenv from 'dotenv'; 
dotenv.config();

Promise.promisifyAll(redis);

export default redis.createClient({
    host: process.env.REDIS_HOST
});