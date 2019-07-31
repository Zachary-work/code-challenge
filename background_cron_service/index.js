import { CronJob } from 'cron';
import moment from 'moment';
import axios from 'axios';
import Promise from 'bluebird';
import empty from 'is-empty';

import knex from './config/knex';
import redis from './config/redis';

import Job from './modal/job';
import ExchangeRate from './modal/exchange_rate';

new CronJob('* * * * * *', async () => {
    let jobs = await knex.select().from('exchange_rate_jobs').orderBy('scheduled_on', 'desc');
    let current = moment.utc();
    jobs = jobs.map((_job) => {
        return new Job(_job.id, _job.base, _job.target, moment(_job.scheduled_on));
    }).filter((_job) => {
        //compare if the job is scheduled on the this moment, if no filter out the job.
        return _job.isScheduledOn(current);
    })

    Promise.map(jobs, (_job) => {
        return axios.get(`https://api.cryptonator.com/api/ticker/${_job.base}-${_job.target}`).then((response) => {
            return { response, job: _job }
        });
    }).filter(async ({ response, job }) => {
        //Filter out those request that's fail, and those response that didn't updated
        if (!response.data.success) {
            return false;
        }
        //Filter out the update if the response is the same as our old record
        return !job.isSameJob(moment.unix(response.data.timestamp));
    }).map(async ({ response, job }) => {
        const ticker = response.data.ticker;
        const updated_on = moment.unix(response.data.timestamp);
        const exchange_rate = new ExchangeRate(ticker, moment.unix(response.data.timestamp));

        const trx = await knex.transaction();
        try {
            await redis.setAsync(`er_${ticker.base}-${ticker.target}`, JSON.stringify(ticker))
            await redis.publishAsync(`erc_${ticker.base}-${ticker.target}`, JSON.stringify(ticker));
            await job.update(trx, updated_on.add(30, 's'));
            await exchange_rate.insert(trx);
            console.log(`${ticker.base}-${ticker.target} updated on ${current.toISOString()}: current price: ${ticker.price}`)
            return trx.commit();
        } catch (e) {
            trx.rollback();
        }
    });

}, null, true);