import empty from 'is-empty';

import knex from '../config/knex';
import cache from '../config/cache';

class Currency{

    static async getCurrencies(){
        let cache_currencies = await cache.getAsync('er_currencies');
        if(!empty(cache_currencies)){
            return JSON.parse(cache_currencies);
        }
        let currencies = await knex.select('code', 'name').from('currencies');
        currencies = currencies.map((_currency) => {
            return {
                ..._currency
            };
        });
        await cache.setAsync('er_currencies', JSON.stringify(currencies), 'EX', 60);
        return currencies;
    }

}

export default Currency;