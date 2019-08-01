
import empty from 'is-empty';

import knex from '../config/knex';
import cache from '../config/cache';

class ExchangeRateRecord {

    constructor(base, target){
        this.base = base;
        this.target = target;
    }

    static async getExchangeList(target){
        let cache_list = await cache.getAsync('er_list');
        if(!empty(cache_list)){
            return JSON.parse(cache_list);
        }
        let db_jobs = await knex.select('base', 'target').from('exchange_rate_jobs').where({
            target
        });
        let list = db_jobs.map((_job) => {
            return {
                base: _job.base,
                target: _job.target,
            };
        });
        await cache.setAsync('er_list', JSON.stringify(list), 'EX', 60);
        return list;
    }

    async getTicker(){
        let cache_ticker =  await cache.getAsync(`er_${this.base}-${this.target}`);
        if(!empty(cache_ticker)){
            return JSON.parse(cache_ticker);
        }
        let db_ticker = await knex.first().from('exchange_rates').where({
            base: this.base,
            target: this.target,
        }).orderBy('data_updated_on', 'desc');
        let { base, target, price, volume, change } = db_ticker;
        return {
            base,
            target,
            price,
            volume,
            change,
        }
    }
}

export default ExchangeRateRecord;